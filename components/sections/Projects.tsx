import { projects, personalInfo } from '@/lib/data'
import type { Project } from '@/lib/data'

// ── Projects 섹션 ─────────────────────────────────────────
// 주요 프로젝트를 카드 형태로 나열.
// link가 빈 문자열이면 외부 링크 버튼을 표시하지 않음.
// ─────────────────────────────────────────────────────────

// 외부 링크 아이콘
function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

// 단일 프로젝트 카드
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group">

      {/* 카드 헤더 */}
      <div className="flex items-start justify-between mb-5">
        {/* 폴더 아이콘 */}
        <div className="p-2.5 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/15 transition-colors duration-200">
          <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>

        {/* 외부 링크 버튼 — link가 있을 때만 */}
        {project.link !== '' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors duration-200 p-1"
            aria-label={`${project.title} 링크 열기`}
          >
            <ExternalIcon />
          </a>
        )}
      </div>

      {/* 프로젝트 제목 */}
      <h3 className="text-base font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors duration-200 leading-snug">
        {project.title}
        {project.featured && (
          <span className="ml-2 align-middle text-[10px] font-medium bg-cyan-500/15 text-cyan-400 border border-cyan-500/25 px-1.5 py-0.5 rounded-full">
            Featured
          </span>
        )}
      </h3>

      {/* 프로젝트 설명 */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* 기술 스택 태그 */}
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-4 border-t border-slate-800">
        {project.techStack.map((tech) => (
          <span key={tech} className="font-mono text-xs text-cyan-400/60">
            #{tech}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  // featured 프로젝트 우선 정렬
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

  return (
    <section id="projects" className="py-28 md:py-36 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">

        {/* 섹션 헤더 */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-cyan-400 text-sm font-medium">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">Projects</h2>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* 프로젝트 카드 그리드 */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub 더보기 링크 */}
        <div className="text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-400 text-sm font-medium rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-colors duration-200"
          >
            {/* GitHub 아이콘 */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub에서 더 보기
          </a>
        </div>
      </div>
    </section>
  )
}
