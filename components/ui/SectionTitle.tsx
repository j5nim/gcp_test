// ── 섹션 제목 컴포넌트 ────────────────────────────────────
// 각 섹션의 제목과 부제목을 일관된 스타일로 표시
// align: 'center'(기본) | 'left'
// ─────────────────────────────────────────────────────────

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const isCenter = align === 'center'

  return (
    <div className={`flex flex-col gap-3 mb-16 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
        {title}
        <span className="text-cyan-400">.</span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-xl leading-relaxed">{subtitle}</p>
      )}
      {/* 강조 언더라인 */}
      <div className={`h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  )
}
