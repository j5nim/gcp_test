// ============================================================
// lib/data.ts — 포트폴리오 데이터 중앙 관리 파일
// 이 파일만 수정하면 전체 포트폴리오 콘텐츠가 업데이트됩니다.
// ============================================================

// ── TypeScript 인터페이스 ──────────────────────────────────

/** 개인 기본 정보 */
export interface PersonalInfo {
  name: string        // 이름
  title: string       // Hero 섹션 직함/역할
  bio: string         // 한 줄 소개 (About, Hero에 사용)
  location: string    // 소속 / 위치 (About 섹션 표시용)
  email: string
  github: string
  resumeUrl: string   // 이력서 PDF URL (없으면 '#')
}

/** 기술 스택 카테고리 */
export interface SkillGroup {
  category: string
  icon: string
  items: string[]
}

/** About 섹션 하이라이트 수치 */
export interface Highlight {
  label: string
  value: string
}

/** 프로젝트 항목 */
export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  link: string        // 빈 문자열('')이면 링크 미표시
  featured: boolean
}

/** 네비게이션 링크 */
export interface NavLink {
  label: string
  href: string
}

/** Contact 섹션 소셜 링크 */
export interface SocialLink {
  name: string
  href: string
  description: string
  external: boolean
}

// ── 개인 정보 ──────────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: '이정현',
  title: 'Backend & LLM Service Developer',
  bio: '백엔드와 LLM 기반 서비스 설계에 관심 있는 컴퓨터공학 학생',
  location: '강원대학교 컴퓨터공학과 / AI 데이터과학과 복수전공',
  email: 'hyeeon02@gmail.com',
  github: 'https://github.com/j5nim',
  resumeUrl: '#',
}

// ── 네비게이션 링크 ────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

// ── 기술 스택 ──────────────────────────────────────────────
export const skills: SkillGroup[] = [
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Python', 'FastAPI'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    items: ['LLM', 'Gemini API', 'BERT', 'Hugging Face'],
  },
]

// ── About 섹션 하이라이트 수치 ─────────────────────────────
export const highlights: Highlight[] = [
  { label: '주요 프로젝트', value: '2+' },
  { label: '보유 기술',     value: '5+' },
  { label: '해커톤 참가',   value: '1+' },
]

// ── 프로젝트 ──────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: '잡자 (Job-Ja)',
    description:
      '이력서와 자기소개서를 분석하고 채용 공고와의 적합도를 계산하는 AI 기반 취업 매칭 플랫폼. ' +
      'Gemini를 활용한 프로필 구조화, BERT 임베딩 기반 유사도 계산, 커피챗 연결 기능을 포함한 해커톤 프로젝트.',
    techStack: ['Python', 'FastAPI', 'Gemini API', 'BERT', 'Next.js'],
    link: '',
    featured: true,
  },
  {
    id: 2,
    title: '유튜브 뉴스 메타데이터 수집 및 전처리 파이프라인',
    description:
      '유튜브 뉴스 영상의 제목·링크·업로드 시각·설명 데이터를 수집하고 전처리하여 ' +
      '분류 및 요약 시스템에 활용할 수 있도록 구성한 자동화 파이프라인. ' +
      'Selenium 기반 크롤링과 후처리 로직 중심으로 구현.',
    techStack: ['Python', 'Selenium'],
    link: '',
    featured: true,
  },
]

// ── 소셜 링크 (Contact 섹션) ───────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: personalInfo.github,
    description: 'GitHub 프로필',
    external: true,
  },
  {
    name: 'Email',
    href: `mailto:${personalInfo.email}`,
    description: personalInfo.email,
    external: false,
  },
]
