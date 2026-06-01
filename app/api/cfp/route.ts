import { NextRequest, NextResponse } from 'next/server';

const CONFLUENCE_BASE = 'https://tving.atlassian.net/wiki';
const PAGE_ID = '1697187127'; // 26-05 테크밋업 페이지

const TABLE_HEADER = `<h2>발표 신청 목록</h2>
<table>
<thead><tr><th>제출 시각</th><th>이름</th><th>소속</th><th>발표 제목</th><th>발표 길이</th><th>요약</th><th>첨부파일</th></tr></thead>
<tbody>`;
const TABLE_MARKER = '<!-- CFP_TABLE -->';

export async function POST(req: NextRequest) {
  const email = process.env.CONFLUENCE_EMAIL;
  const token = process.env.CONFLUENCE_API_TOKEN;

  if (!email || !token) {
    return NextResponse.json(
      { error: 'Confluence 인증 정보가 설정되지 않았습니다.' },
      { status: 500 },
    );
  }

  const formData = await req.formData();
  const name = formData.get('name') as string;
  const team = formData.get('team') as string;
  const length = formData.get('length') as string;
  const title = formData.get('title') as string;
  const abstract = formData.get('abstract') as string;
  const file = formData.get('file') as File | null;

  if (!name || !title || !abstract) {
    return NextResponse.json(
      { error: '이름, 제목, 발표 요약은 필수입니다.' },
      { status: 400 },
    );
  }

  const auth = Buffer.from(`${email}:${token}`).toString('base64');
  const headers = {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  try {
    // 1. 현재 페이지 내용 + 버전 가져오기
    const getRes = await fetch(
      `${CONFLUENCE_BASE}/rest/api/content/${PAGE_ID}?expand=body.storage,version`,
      { headers },
    );

    if (!getRes.ok) {
      const errText = await getRes.text();
      console.error('Confluence GET error:', getRes.status, errText);
      return NextResponse.json(
        { error: '페이지 조회에 실패했습니다.' },
        { status: 502 },
      );
    }

    const pageData = await getRes.json();
    const currentVersion = pageData.version.number;
    const pageTitle = pageData.title;
    let currentBody: string = pageData.body.storage.value;

    // 2. 새 행 생성
    const timestamp = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    const fileName = file ? `${escapeHtml(file.name)} (${(file.size / 1024).toFixed(1)}KB)` : '-';
    const newRow = `<tr><td>${timestamp}</td><td>${escapeHtml(name)}</td><td>${escapeHtml(team || '-')}</td><td>${escapeHtml(title)}</td><td>${escapeHtml(length)}</td><td>${escapeHtml(abstract)}</td><td>${fileName}</td></tr>`;

    // 3. 기존 테이블에 행 추가 또는 새 테이블 생성
    if (currentBody.includes(TABLE_MARKER)) {
      // 마커 바로 앞(</tbody> 앞)에 새 행 삽입
      currentBody = currentBody.replace(
        `${TABLE_MARKER}</tbody></table>`,
        `${newRow}\n${TABLE_MARKER}</tbody></table>`,
      );
    } else {
      // 테이블이 없으면 본문 끝에 새로 생성
      currentBody += `\n<hr/>\n${TABLE_HEADER}\n${newRow}\n${TABLE_MARKER}</tbody></table>`;
    }

    // 4. 페이지 업데이트
    const updateRes = await fetch(
      `${CONFLUENCE_BASE}/rest/api/content/${PAGE_ID}`,
      {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          id: PAGE_ID,
          type: 'page',
          title: pageTitle,
          version: { number: currentVersion + 1 },
          body: {
            storage: {
              value: currentBody,
              representation: 'storage',
            },
          },
        }),
      },
    );

    if (!updateRes.ok) {
      const errText = await updateRes.text();
      console.error('Confluence PUT error:', updateRes.status, errText);
      return NextResponse.json(
        { error: '제출에 실패했습니다. 잠시 후 다시 시도해주세요.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Confluence API call failed:', err);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
