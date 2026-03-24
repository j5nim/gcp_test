import { personalInfo, skills } from '@/lib/data'
import type { SkillGroup } from '@/lib/data'

// ── About 섹션 ────────────────────────────────────────────
// 직업/전공과 보유 기술을 한 섹션에 시각적으로 표시.
// 왼쪽: 소개 & 전공 정보 / 오른쪽: 기술 스택 카테고리 카드
// ─────────────────────────────────────────────────────────

// 기술 스택 카드 — 카테고리별 렌더링
function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-colors duration-200 group">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="text-xl" role="img" aria-label={group.category}>
          {group.icon}
        </span>
        <span className="text-slate-300 text-sm font-semibold group-hover:text-cyan-400 transition-colors duration-200">
          {group.category}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 bg-slate-800 border border-slate-700/60 text-slate-400 text-xs rounded-md font-mono hover:border-cyan-500/40 hover:text-cyan-300 transition-colors duration-150"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">

        {/* 섹션 헤더 — 넘버링 스타일 */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-cyan-400 text-sm font-medium">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">About</h2>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── 왼쪽: 전공 & 소개 ── */}
          <div className="space-y-6">

            {/* 전공 정보 */}
            <div>
              <p className="font-mono text-xs text-cyan-400/50 mb-2 tracking-wider uppercase">
                Education
              </p>
              <h3 className="text-lg font-semibold text-slate-100 leading-snug mb-1">
                강원대학교
              </h3>
              {/* 복수전공 각 전공 라인으로 분리 */}
              <p className="text-slate-400 text-sm">컴퓨터공학과</p>
              <p className="text-slate-400 text-sm">AI 데이터과학과 <span className="text-cyan-500/70 text-xs">복수전공</span></p>
            </div>

            {/* 구분선 */}
            <div className="w-8 h-px bg-slate-700" />

            {/* 한 줄 소개 */}
            <p className="text-slate-400 leading-relaxed text-sm">
              {personalInfo.bio}
            </p>

            {/* 관심 분야 — 코드 블록 스타일 */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
              {/* 코드 에디터 탭 바 */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800/60 border-b border-slate-700/50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 font-mono text-xs text-slate-500">interests.ts</span>
              </div>
              {/* 코드 내용 */}
              <div className="px-5 py-4 font-mono text-sm space-y-1">
                <p>
                  <span className="text-purple-400">const </span>
                  <span className="text-cyan-300">interests </span>
                  <span className="text-slate-400">= [</span>
                </p>
                {[
                  'Backend Engineering',
                  'LLM Application Dev',
                  'AI Service Design',
                ].map((item) => (
                  <p key={item} className="pl-4 text-green-400/80">
                    &quot;{item}&quot;,
                  </p>
                ))}
                <p className="text-slate-400">]</p>
              </div>
            </div>
          </div>

          {/* ── 오른쪽: 기술 스택 ── */}
          <div className="space-y-3">
            <p className="font-mono text-xs text-cyan-400/50 mb-4 tracking-wider uppercase">
              Tech Stack
            </p>
            {skills.map((group) => (
              <SkillCard key={group.category} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
