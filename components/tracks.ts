/** 트랙 → 색/라벨. 한 곳에 모아 둔다. */

export const TRACK_COLOR: Record<string, string> = {
  MAIN: 'var(--red)',
  INFRA: 'var(--sky)',
  WEB: 'var(--lime)',
  ML: 'var(--violet)',
  DATA: 'var(--amber)',
  ALL: 'var(--ink-3)',
  QE: 'var(--amber)',
  APP: 'var(--sky)',
  LIVE: 'var(--violet)',
};

export const TRACK_LABEL: Record<string, string> = {
  MAIN: 'Main',
  INFRA: 'Infra',
  WEB: 'Web · App',
  ML: 'AI · ML',
  DATA: 'Data',
  ALL: 'Common',
  QE: 'Quality Engineering',
  APP: 'App Service Development',
  LIVE: 'Web Live Development',
};

export function trackColor(track?: string) {
  return TRACK_COLOR[track ?? 'ALL'] ?? TRACK_COLOR.ALL;
}

export function trackLabel(track?: string) {
  return TRACK_LABEL[track ?? 'ALL'] ?? TRACK_LABEL.ALL;
}
