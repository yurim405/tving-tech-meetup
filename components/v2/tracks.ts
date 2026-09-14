/** 세션 트랙 → 색/라벨. v2 패널과 뱃지가 같은 값을 쓰도록 한 곳에 둔다. */

export const TRACK_COLOR: Record<string, string> = {
  MAIN: 'var(--t-MAIN)',
  INFRA: 'var(--t-INFRA)',
  WEB: 'var(--t-WEB)',
  ML: 'var(--t-ML)',
  DESIGN: 'var(--t-DESIGN)',
  ADS: 'var(--t-ADS)',
  ALL: 'var(--t-ALL)',
};

export const TRACK_CAPTION: Record<string, string> = {
  MAIN: '밋업의 중심이 되는 세션',
  INFRA: '스트리밍, CDN, 트래픽',
  WEB: '프론트엔드와 웹 플랫폼',
  ML: '추천, LLM, 데이터',
  DESIGN: '디자인 시스템과 UX',
  ADS: '광고와 수익화',
  ALL: '모두를 위한 시간',
};

export function trackColor(track?: string) {
  return TRACK_COLOR[track ?? 'ALL'] ?? TRACK_COLOR.ALL;
}
