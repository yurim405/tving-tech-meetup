export const MEETUP_META = {
  edition: '',
  monthLabel: 'May',
  dateText: '2026. 09. 30 (WED) 15:00 – 17:00',
  venue: '13층 C/D',
  capacity: '오프라인 40석',
  hostTeam: 'Web Core Development & Web Live Development',
  theme: 'Streaming at Scale',
  themeKo: '스트리밍의 안쪽, 그 너머',
  cfpUrl: 'https://tving.atlassian.net/wiki/spaces/TVING/pages/1854573076/26-09',
};

export const MEETUP_TARGET_ISO = '2026-09-30T15:00:00+09:00';

/* ---------- Schedule ---------- */

export interface ScheduleItem {
  time: string;
  type: 'register' | 'opening' | 'session' | 'break' | 'lightning' | 'closing';
  title: string;
  speaker?: string;
  role?: string;
  desc?: string;
  duration?: string;
  track?: string;
  tags?: string[];
  keynote?: boolean;
}

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    time: '15:00',
    type: 'opening',
    title: `팀 소개 — ${MEETUP_META.hostTeam}`,
    desc: '이번 달 호스트 팀 Web Core Development와 Web Live Development를 소개합니다.',
    duration: '10m',
    track: 'MAIN',
  },
  {
    time: '15:10',
    type: 'session',
    title: '보안사고 팀별 회고',
    desc: 'Billing · API · Service · Infra · Media 다섯 팀이 각자의 대응 과정을 회고합니다.',
    duration: '40m',
    track: 'ALL',
    tags: ['Billing', 'API', 'Service', 'Infra', 'Media'],
  },
  {
    time: '15:50',
    type: 'break',
    title: '휴식',
    desc: '잠시 쉬어갑니다. 커피 한 잔과 함께 옆자리 동료와 이야기 나눠 보세요.',
    duration: '10m',
    track: 'ALL',
  },
  {
    time: '16:00',
    type: 'session',
    title: '기술 공유 — 글로벌 아키텍쳐 TF 회고',
    speaker: '옥승훈',
    role: 'Service Platform',
    duration: '10m',
    track: 'ALL',
  },
  {
    time: '16:10',
    type: 'session',
    title: '기술 공유 — 순회를 값으로 다루기',
    speaker: '정래한',
    role: 'Web Core Development',
    duration: '10m',
    track: 'ALL',
  },
  {
    time: '16:20',
    type: 'lightning',
    title: '미니 코너 — [2026 추석 특집] 가족오락관',
    desc: '명절 특집으로 준비한 팀 대항 미니 게임 코너입니다.',
    duration: '30m',
    track: 'MAIN',
  },
  {
    time: '16:50',
    type: 'session',
    title: 'Tech Pulse',
    desc: '한 달 새 바뀐 기술 흐름을 짧게 훑습니다.',
    duration: '10m',
    track: 'ALL',
  },
  {
    time: '17:00',
    type: 'closing',
    title: '마무리',
    desc: '다음 밋업 예고와 마무리 인사.',
    duration: '1m',
    track: 'ALL',
  },
];


/* ---------- Speakers ---------- */

export interface Speaker {
  id: string;
  name: string;
  nameEn?: string;
  team: string;
  role?: string;
  topic: string;
  emoji?: string;
  bio?: string;
  photo?: string;
  accent?: string;
}

export const SPEAKER_DATA: Speaker[] = [
  {
    id: 'ok-seunghun',
    name: '옥승훈',
    team: 'Service Platform',
    topic: '글로벌 아키텍쳐 TF 회고',
    emoji: '🌏',
  },
  {
    id: 'jung-raehan',
    name: '정래한',
    team: 'Web Core Development',
    topic: '순회를 값으로 다루기',
    emoji: '🔁',
  },
];

/* ---------- CFP tracks ---------- */

export const CFP_TRACKS = [
  { id: 'INFRA',  label: 'INFRA · LIVE',       desc: '스트리밍, CDN, 트래픽' },
  { id: 'WEB',    label: 'WEB · APP',           desc: '프론트엔드, 모바일' },
  { id: 'ML',     label: 'ML · DATA',           desc: '추천, LLM, 데이터' },
  { id: 'DESIGN', label: 'DESIGN ENG.',         desc: '디자인 시스템, UX' },
  { id: 'ADS',    label: 'ADS · MONETIZATION',  desc: '광고, 미드롤' },
  { id: 'ETC',    label: '기타',                 desc: '그 외 자유 주제' },
];

export const CFP_LENGTHS = ['10분 ⚡', '20분', '30분'];
