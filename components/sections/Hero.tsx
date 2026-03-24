import { personalInfo } from '@/lib/data'

// ── Hero 섹션 ─────────────────────────────────────────────
// 화면 최상단. 이름과 한 줄 소개가 크게 돋보이는 섹션.
// 터미널 스타일 프롬프트로 개발자 분위기를 연출.
// ─────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 overflow-hidden">

      {/* 배경 — 흐릿한 그라디언트 블러 장식 */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-700/8 rounded-full blur-3xl" />
        {/* 미묘한 도트 그리드 패턴 */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-4xl w-full">

        {/* 터미널 프롬프트 */}
        <div className="flex items-center gap-2 mb-8 font-mono text-sm">
          <span className="text-cyan-400">❯</span>
          <span className="text-slate-500">whoami</span>
          {/* 깜빡이는 커서 */}
          <span className="inline-block w-2 h-4 bg-cyan-400 opacity-80 animate-pulse ml-0.5" aria-hidden="true" />
        </div>

        {/* 이름 — 화면에서 가장 크고 굵게 */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-none mb-5">
          <span className="bg-gradient-to-br from-slate-100 via-slate-200 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* 직함 — 코드 주석 스타일 */}
        <p className="font-mono text-base md:text-lg text-cyan-400/70 mb-8 tracking-wide">
          <span className="text-slate-600">{'// '}</span>
          {personalInfo.title}
        </p>

        {/* 한 줄 소개 — 크고 명확하게 */}
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light leading-snug max-w-2xl mb-14">
          {personalInfo.bio}
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 active:bg-cyan-600 transition-colors duration-200 text-sm"
          >
            프로젝트 보기 →
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-7 py-3.5 border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-cyan-500/60 hover:text-cyan-400 transition-colors duration-200 text-sm"
          >
            연락하기
          </a>
        </div>
      </div>

      {/* 스크롤 유도 — 하단 중앙 */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 animate-bounce"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
