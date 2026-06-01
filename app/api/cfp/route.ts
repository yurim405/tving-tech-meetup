import { NextRequest, NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;
const ipRequests = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function validateBody(body: Record<string, unknown>): string | null {
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const title = typeof body.title === 'string' ? body.title.trim() : '';
  const abstract = typeof body.abstract === 'string' ? body.abstract.trim() : '';

  if (!name) return '이름은 필수입니다.';
  if (!title) return '발표 제목은 필수입니다.';
  if (!abstract) return '발표 요약은 필수입니다.';
  if (name.length > 100) return '이름은 100자 이내여야 합니다.';
  if (title.length > 120) return '제목은 120자 이내여야 합니다.';
  if (abstract.length > 600) return '요약은 600자 이내여야 합니다.';

  return null;
}

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.APPS_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json(
      { error: 'APPS_SCRIPT_URL이 설정되지 않았습니다.' },
      { status: 500 },
    );
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: '요청이 너무 많습니다. 1분 후 다시 시도해주세요.' },
      { status: 429 },
    );
  }

  const origin = req.headers.get('origin') ?? '';
  const host = req.headers.get('host') ?? '';
  if (origin && !origin.includes(host)) {
    return NextResponse.json({ error: '허용되지 않은 요청입니다.' }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: '잘못된 요청 형식입니다.' }, { status: 400 });
  }

  const validationError = validateBody(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const formData = new URLSearchParams();
  formData.append('name', String(body.name).trim());
  formData.append('team', String(body.team ?? '').trim());
  formData.append('length', String(body.length ?? '10분'));
  formData.append('title', String(body.title).trim());
  formData.append('abstract', String(body.abstract).trim());

  try {
    const res = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: '제출 중 오류가 발생했습니다.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: '외부 서비스 연결에 실패했습니다.' },
      { status: 502 },
    );
  }
}
