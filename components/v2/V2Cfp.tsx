'use client';

import { useState } from 'react';
import { CFP_TRACKS } from '@/data/meetup-data';

interface CfpForm {
  name: string;
  team: string;
  track: string;
  title: string;
  abstract: string;
}

const INITIAL: CfpForm = { name: '', team: '', track: CFP_TRACKS[0].id, title: '', abstract: '' };
const ABSTRACT_MAX = 600;

const FIELD =
  'w-full bg-[var(--paper)] border border-[var(--line-2)] rounded-xl px-4 py-3.5 text-[15px] ' +
  'outline-none transition-colors focus:border-[var(--ink)] placeholder:text-[var(--ink-3)]';

export default function V2Cfp() {
  const [form, setForm] = useState<CfpForm>(INITIAL);
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');

  // 뮤테이션 대신 새 객체를 만든다
  const set = <K extends keyof CfpForm>(key: K, value: CfpForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === 'sending') return;

    setState('sending');
    setError('');
    try {
      const res = await fetch('/api/cfp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, length: '10분' }),
      });
      if (!res.ok) {
        const data: unknown = await res.json().catch(() => null);
        const message =
          data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
            ? data.error
            : '잠시 후 다시 시도해 주세요.';
        throw new Error(message);
      }
      setState('done');
    } catch (err) {
      console.error('CFP 제출 실패:', err);
      setError(err instanceof Error ? err.message : '제출에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      setState('idle');
    }
  }

  return (
    <section id="v2-cfp" className="border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="v2-label v2-rise">Call for Proposals</p>
            <h2 className="v2-h2 mt-4 v2-rise">발표 신청</h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-[var(--ink-2)] max-w-[420px] v2-rise">
              티빙 엔지니어라면 누구나 신청할 수 있어요.
              짧은 회고도, 깊은 기술 발표도 모두 환영합니다.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper-2)] p-6 md:p-9 v2-rise">
            {state === 'done' ? (
              <div className="py-10 text-center">
                <h3 className="text-[24px] font-extrabold tracking-[-0.03em]">접수 완료</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[var(--ink-2)]">
                  발표 신청이 등록되었습니다. 확인 후 따로 연락드릴게요.
                </p>
                <button
                  onClick={() => { setForm(INITIAL); setState('idle'); }}
                  className="v2-btn v2-btn-ghost mt-8"
                >
                  다시 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="v2-label">이름 *</span>
                    <input
                      className={`${FIELD} mt-2.5`} type="text" required maxLength={100}
                      value={form.name} onChange={(e) => { set('name', e.target.value); }}
                      placeholder="홍길동"
                    />
                  </label>
                  <label className="block">
                    <span className="v2-label">소속 팀</span>
                    <input
                      className={`${FIELD} mt-2.5`} type="text"
                      value={form.team} onChange={(e) => { set('team', e.target.value); }}
                      placeholder="예) Web Core Development"
                    />
                  </label>
                </div>

                <div>
                  <span className="v2-label">트랙</span>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {CFP_TRACKS.map((t) => (
                      <button
                        key={t.id} type="button"
                        onClick={() => { set('track', t.id); }}
                        aria-pressed={form.track === t.id}
                        className="px-3.5 py-2 rounded-lg text-[13px] font-bold border transition-colors"
                        style={
                          form.track === t.id
                            ? { background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' }
                            : { borderColor: 'var(--line-2)', color: 'var(--ink-2)' }
                        }
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="block">
                  <span className="v2-label">발표 제목 *</span>
                  <input
                    className={`${FIELD} mt-2.5`} type="text" required maxLength={120}
                    value={form.title} onChange={(e) => { set('title', e.target.value); }}
                    placeholder="한 줄로 요약하면 어떤 이야기인가요?"
                  />
                </label>

                <label className="block">
                  <span className="v2-label">
                    발표 요약 * <span className="normal-case tracking-normal">({form.abstract.length}/{ABSTRACT_MAX})</span>
                  </span>
                  <textarea
                    className={`${FIELD} mt-2.5 resize-y`} rows={5} required
                    value={form.abstract}
                    onChange={(e) => { set('abstract', e.target.value.slice(0, ABSTRACT_MAX)); }}
                    placeholder="어떤 문제를 풀었고, 무엇을 배웠는지 적어주세요."
                  />
                </label>

                {error && <p role="alert" className="text-[14px] text-[var(--t-ADS)] font-semibold">{error}</p>}

                <div className="flex items-center justify-between gap-4 pt-1">
                  <span className="text-[13px] text-[var(--ink-3)]">제출하면 시트에 자동 등록됩니다.</span>
                  <button type="submit" className="v2-btn" disabled={state === 'sending'}>
                    {state === 'sending' ? '제출 중…' : '신청서 제출'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
