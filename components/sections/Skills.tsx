import { skills } from '@/lib/data'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'

// ── Skills 섹션 ───────────────────────────────────────────
// 기술 스택을 카테고리별 카드로 표시
// 각 카드에 아이콘, 카테고리명, 기술 태그 표시
// ─────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills"
          subtitle="다양한 기술 스택을 활용하여 문제를 해결합니다"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((group) => (
            <Card key={group.category} hover className="group">
              {/* 카드 헤더 */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" role="img" aria-label={group.category}>
                  {group.icon}
                </span>
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors duration-200">
                  {group.category}
                </h3>
              </div>

              {/* 기술 태그 목록 */}
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 bg-slate-700/50 border border-slate-600/40 text-slate-300 text-sm rounded-full hover:border-cyan-500/50 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
