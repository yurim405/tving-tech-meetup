'use client';

import { useState } from 'react';
import { Icon } from '@/components/Icons';
import { Sparkle, ArrowDoodle, StarBurst, BrushUnderline, CheckDoodle } from '@/components/Decorations';

interface CfpForm {
  name: string;
  team: string;
  title: string;
  abstract: string;
}

const INITIAL_FORM: CfpForm = {
  name: '', team: '', title: '', abstract: '',
};

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block field">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--fg-2)] font-bold uppercase">{label}</span>
        {hint && <span className="font-mono text-[10px] text-[var(--fg-4)] tracking-wide">{hint}</span>}
      </div>
      {children}
    </label>
  );
}

export default function CfpSection() {
  const [form, setForm] = useState<CfpForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const set = (k: keyof CfpForm, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
  };
  const remaining = 600 - form.abstract.length;

  const validate = () => {
    if (!form.name.trim() || !form.title.trim() || !form.abstract.trim()) {
      setError('이름, 제목, 발표 요약은 필수입니다.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/cfp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, length: '10분' }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? '제출 중 오류가 발생했습니다.');
        return;
      }

      setSubmitted(true);
    } catch {
      setError('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="cfp" className="relative py-28 md:py-40 border-t border-[var(--line)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(45% 35% at 80% 30%, rgba(232,117,42,0.16) 0%, transparent 70%)' }} />
      <div className="absolute top-[10%] left-[8%] rotate-[20deg]">
        <Sparkle size={56} color="var(--maple)" className="deco-pop" style={{ '--d': '0.3s' } as React.CSSProperties} />
      </div>
      <div className="absolute top-[30%] left-[4%] -rotate-[20deg]">
        <ArrowDoodle size={80} color="var(--maple)" className="deco-wiggle" style={{ '--d': '0.6s' } as React.CSSProperties} />
      </div>
      <div className="absolute bottom-[10%] right-[6%]">
        <StarBurst size={56} color="var(--persimmon)" className="deco-twinkle" style={{ '--d': '0.9s' } as React.CSSProperties} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* left */}
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <div className="section-tag reveal"><span className="num">05</span> CALL FOR PROPOSALS</div>

            <h2 className="display-section mt-6 reveal" data-delay="1">
              <span className="relative inline-block">
                발표
                <BrushUnderline width={220} color="var(--maple)" style={{ position: 'absolute', left: -4, bottom: '-14%', width: '108%' }} />
              </span><br />
              <span style={{ background: 'var(--maple)', color: 'var(--on-maple)', padding: '0 14px', display: 'inline-block', transform: 'rotate(-2deg)' }}>
                신청.
              </span>
            </h2>

            <p className="mt-10 text-[var(--fg-3)] text-[16px] leading-[1.75] max-w-[420px] reveal" data-delay="2">
              다음 달, 다다음 달 밋업에 서 보고 싶은 분이라면 누구나 환영합니다.
              <span className="text-[var(--fg-1)]"> 짧은 회고도, 깊은 기술 발표도 좋아요.</span>
            </p>

          </div>

          {/* right form */}
          <div className="md:col-span-7">
            <div
              className="bg-[var(--bg-1)] p-6 md:p-10 reveal"
              data-delay="2"
              style={{ border: '1.5px solid var(--line-strong)', boxShadow: '8px 8px 0 var(--maple)' }}
            >
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >

                  <Field label="NAME *">
                    <input type="text" name="name" value={form.name} onChange={(e) => { set('name', e.target.value); }} placeholder="홍길동" />
                  </Field>

                  <Field label="소속 팀 / 회사">
                    <input type="text" name="team" value={form.team} onChange={(e) => { set('team', e.target.value); }} placeholder="예) TVING · Web Core Development" />
                  </Field>

                  {/* length - fixed 10분 */}
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.18em] text-[var(--fg-2)] font-bold uppercase mb-3">발표 길이</div>
                    <div className="inline-flex p-1 border border-[var(--line)] bg-[var(--bg-2)]">
                      <span className="px-4 py-1.5 text-[13px] font-bold bg-[var(--maple)] text-[var(--on-maple)]">10분</span>
                    </div>
                  </div>

                  <Field label="발표 제목 *">
                    <input type="text" name="title" value={form.title} onChange={(e) => { set('title', e.target.value); }} placeholder="한 줄로 요약하면 어떤 이야기인가요?" maxLength={120} />
                  </Field>

                  <Field label="발표 요약 *" hint={`${remaining}자 남음`}>
                    <textarea rows={5} name="abstract" value={form.abstract} onChange={(e) => { set('abstract', e.target.value.slice(0, 600)); }} placeholder="어떤 문제를 풀었고, 무엇을 배웠는지 600자 이내로." />
                  </Field>

                  {error && (
                    <div className="text-[13px] px-4 py-3" style={{ color: 'var(--on-maple)', background: 'var(--maple)', borderLeft: '4px solid var(--on-maple)', fontWeight: 700 }}>
                      ⚠ {error}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[var(--line)]">
                    <p className="text-[12px] text-[var(--fg-4)] font-mono">
                      제출하면 Google Sheets에 자동 등록됩니다.
                    </p>
                    <button type="submit" className="btn-maple" disabled={submitting}>
                      {submitting ? '제출 중...' : '신청서 제출'}
                      {!submitting && <Icon name="arrowUpRight" size={14} />}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 relative">
                  <Sparkle size={32} color="var(--maple)" style={{ position: 'absolute', top: 0, left: '30%', transform: 'rotate(15deg)' }} />
                  <Sparkle size={24} color="var(--ginkgo)" style={{ position: 'absolute', top: 12, right: '28%', transform: 'rotate(-15deg)' }} />

                  <div className="inline-flex w-16 h-16 items-center justify-center mb-6 mx-auto" style={{ background: 'var(--maple)', boxShadow: '4px 4px 0 var(--shadow)' }}>
                    <CheckDoodle size={36} color="var(--on-maple)" />
                  </div>
                  <h3 className="display-mid">접수 완료<span className="text-maple">!</span></h3>
                  <p className="mt-5 text-[var(--fg-3)] text-[15px] leading-[1.7] max-w-[420px] mx-auto">
                    발표 신청이 등록되었습니다.
                  </p>
                  <button onClick={reset} className="mt-8 btn-ghost-line text-[13px]">
                    다른 발표 신청하기
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
