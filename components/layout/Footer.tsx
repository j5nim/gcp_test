import { personalInfo } from '@/lib/data'

// ── Footer ────────────────────────────────────────────────
// 이메일 주소와 GitHub 링크가 포함된 하단 영역.
// ─────────────────────────────────────────────────────────

// GitHub 아이콘
function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

// 이메일 아이콘
function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 py-16">

        {/* 상단: 이름 + 한 줄 소개 */}
        <div className="text-center mb-10">
          <p className="font-mono text-xs text-cyan-400/50 mb-3 tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">{personalInfo.name}</h2>
          <p className="text-slate-500 text-sm">
            새로운 기회와 협업에 항상 열려 있습니다.
          </p>
        </div>

        {/* 연락 링크 */}
        <div className="flex justify-center gap-4 mb-12">
          {/* 이메일 */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2.5 px-5 py-2.5 bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-xl hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200 group"
          >
            <EmailIcon />
            <span>{personalInfo.email}</span>
          </a>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-xl hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200 group"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>

        {/* 구분선 */}
        <div className="h-px bg-slate-800/60 mb-8" />

        {/* 하단: 저작권 */}
        <p className="text-center font-mono text-xs text-slate-600">
          © {year} {personalInfo.name} · Built with{' '}
          <span className="text-cyan-600">Next.js</span>
          {' & '}
          <span className="text-cyan-600">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
