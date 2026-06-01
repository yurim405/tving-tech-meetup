export const MEETUP_META = {
  edition: '',
  monthLabel: 'May',
  dateText: '2026. 06. 05 (FRI) 15:00 – 16:30',
  venue: '13층 C/D',
  capacity: '오프라인 40석',
  hostTeam: 'Web Core Development',
  theme: 'Streaming at Scale',
  themeKo: '스트리밍의 안쪽, 그 너머',
};

export const MEETUP_TARGET_ISO = '2026-06-05T15:00:00+09:00';

/* ---------- Schedule ---------- */

export interface ScheduleItem {
  time: string;
  type: 'register' | 'opening' | 'session' | 'break' | 'lightning' | 'closing';
  title: string;
  speaker?: string;
  role?: string;
  desc: string;
  duration?: string;
  track?: string;
  tags?: string[];
  keynote?: boolean;
}

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    time: '15:00',
    type: 'opening',
    title: '팀 소개 — Web Core Development',
    desc: '이번 달 호스트 팀 Web Core Development를 소개합니다.',
    duration: '10m',
    track: 'MAIN',
  },
  {
    time: '15:10',
    type: 'session',
    title: '신규 입사자 소개',
    desc: '이번 달 새로 합류한 동료들을 만나보세요.',
    duration: '5m',
    track: 'ALL',
  },
  {
    time: '15:15',
    type: 'session',
    title: '장애 리포트',
    desc: '최근 발생한 장애 사례를 공유하고 원인과 대응 과정을 되짚어 봅니다.',
    duration: '15m',
    track: 'INFRA',
    tags: ['Incident', 'Postmortem'],
  },
  {
    time: '15:30',
    type: 'session',
    title: 'Tech spec / RFC',
    desc: '공개 예정',
    track: 'WEB',
  },
  {
    time: '15:40',
    type: 'session',
    title: '기술 공유 — Refine 실제 서비스 사례 공유 (feat. 투표 플랫폼)',
    speaker: '송민혁',
    desc: '공개 예정',
    track: 'WEB',
    tags: ['Refine', 'Admin'],
  },
  {
    time: '16:00',
    type: 'session',
    title: 'Tech Pulse',
    desc: '공개 예정',
    track: 'ALL',
  },
  {
    time: '16:15',
    type: 'closing',
    title: "What's Next & Closing",
    desc: '공개 예정',
    duration: '15m',
    track: 'ALL',
  },
];

/* ---------- Speakers ---------- */

export interface Speaker {
  id: string;
  name: string;
  nameEn: string;
  team: string;
  role: string;
  topic: string;
  bio: string;
  photo: string;
  accent: string;
}

export const SPEAKER_DATA: Speaker[] = [
  {
    id: 'park-jihoon',
    name: '박지훈',
    nameEn: 'Jihoon Park',
    team: 'Office of CTO',
    role: 'CTO',
    topic: 'Opening Keynote',
    bio: '티빙의 기술 조직을 이끕니다. 이전에는 카카오, 라인에서 미디어 플랫폼을 만들었어요.',
    photo: '/speakers/spk1.svg',
    accent: 'from-rose-500/30 to-transparent',
  },
  {
    id: 'jung-sumin',
    name: '정수민',
    nameEn: 'Sumin Jung',
    team: 'Live Platform',
    role: 'Tech Lead',
    topic: '1,000만 동시 접속을 견디는 라이브 스트리밍 아키텍처',
    bio: '라이브 송출, CDN 라우팅, ABR을 만집니다. 야구 중계 시즌이 가장 바쁜 사람.',
    photo: '/speakers/spk2.svg',
    accent: 'from-red-500/30 to-transparent',
  },
  {
    id: 'lee-garam',
    name: '이가람',
    nameEn: 'Garam Lee',
    team: 'Web Platform',
    role: 'Senior Engineer',
    topic: 'Next.js 15 App Router로 다시 짠 티빙 웹',
    bio: 'tving.com 웹 전반과 디자인 시스템 연동을 담당합니다. RSC를 너무 좋아함.',
    photo: '/speakers/spk3.svg',
    accent: 'from-amber-500/30 to-transparent',
  },
  {
    id: 'han-doyeon',
    name: '한도연',
    nameEn: 'Doyeon Han',
    team: 'ML Platform',
    role: 'ML Engineer',
    topic: 'TVING 추천, LLM과 협업하는 법',
    bio: '추천 모델과 프롬프트 파이프라인을 운영합니다. 가장 좋아하는 단어는 eval.',
    photo: '/speakers/spk4.svg',
    accent: 'from-violet-500/30 to-transparent',
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
