export const profile = {
  name: '이름',           // TODO: 이름 입력
  nameEn: 'Your Name',
  role: 'Frontend Developer',
  birth: '1996.00.00',    // TODO: 생년월일 입력
  email: 'your@email.com', // TODO: 이메일 입력
  github: 'https://github.com/gyu0714',
  linkedin: '',           // TODO: LinkedIn URL 입력
  intro: [
    '복잡한 문제를 단순하고 직관적인 코드로 해결하고,',
    '사용자가 서비스에 자연스럽게 녹아드는 경험을 만들어갑니다.',
  ],
  intro2: [
    '개발 전문지식을 기반으로 최적의 구조와 성능을 고안하고,',
    '팀원과의 원활한 소통으로 함께 성장합니다.',
  ],
  // TODO: 본인 아바타/프로필 이미지 경로로 교체
  avatar: null,
}

export const summary = {
  careerYears: '0년 0개월',
  description:
    '간략한 커리어 요약을 여기에 작성하세요. 어떤 분야에서 어떤 일을 해왔는지 2~3문장으로 소개합니다.',
}

export const experiences = [
  {
    company: '회사명',
    logo: null,           // TODO: 로고 이미지 경로
    period: '20XX.XX ~ 현재',
    tasks: [
      '주요 업무 1',
      '주요 업무 2',
      '주요 업무 3',
    ],
  },
  {
    company: '회사명 2',
    logo: null,
    period: '20XX.XX ~ 20XX.XX',
    tasks: [
      '주요 업무 1',
      '주요 업무 2',
    ],
  },
]

export const tools = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Git', icon: '🐙' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Notion', icon: '📝' },
]

export const strengths = [
  {
    icon: '💻',
    title: '강점 제목 1',
    description: '강점에 대한 설명을 여기에 입력하세요.',
  },
  {
    icon: '🤝',
    title: '강점 제목 2',
    description: '강점에 대한 설명을 여기에 입력하세요.',
  },
  {
    icon: '🚀',
    title: '강점 제목 3',
    description: '강점에 대한 설명을 여기에 입력하세요.',
  },
]

export const tags = ['#태그1', '#태그2', '#태그3']

export const projects = [
  {
    id: 1,
    title: '프로젝트 이름',
    period: '20XX.XX ~ 20XX.XX',
    summary: '프로젝트 한 줄 요약',
    role: 'Frontend Developer',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    description: '프로젝트에 대한 상세 설명을 여기에 작성하세요. 어떤 문제를 해결했는지, 어떤 기여를 했는지 작성합니다.',
    highlights: [
      '주요 성과 1',
      '주요 성과 2',
      '주요 성과 3',
    ],
    github: 'https://github.com/gyu0714',
    demo: '',
    // TODO: 스크린샷 이미지 경로 배열
    screenshots: [],
  },
  {
    id: 2,
    title: '프로젝트 이름 2',
    period: '20XX.XX ~ 20XX.XX',
    summary: '프로젝트 한 줄 요약',
    role: 'Frontend Developer',
    tech: ['React', 'Node.js'],
    description: '프로젝트에 대한 상세 설명을 여기에 작성하세요.',
    highlights: [
      '주요 성과 1',
      '주요 성과 2',
    ],
    github: 'https://github.com/gyu0714',
    demo: '',
    screenshots: [],
  },
]
