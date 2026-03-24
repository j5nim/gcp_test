import { ReactNode } from 'react'

// ── 공통 카드 컴포넌트 ─────────────────────────────────────
// hover=true 시 마우스 오버 효과(테두리 강조, 위로 이동) 활성화
// ─────────────────────────────────────────────────────────

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={[
        'bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm',
        hover
          ? 'transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5'
          : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
