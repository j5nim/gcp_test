import { ReactNode } from 'react'

// ── 공통 버튼 컴포넌트 ────────────────────────────────────
// variant: primary(채움) | outline(테두리) | ghost(투명)
// href 제공 시 <a> 태그, 아닌 경우 <button> 태그로 렌더링
// ─────────────────────────────────────────────────────────

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  target?: '_blank' | '_self'
}

const BASE =
  'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

const VARIANTS = {
  primary: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 active:bg-cyan-600 shadow-lg shadow-cyan-500/20',
  outline: 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 active:bg-cyan-500/20',
  ghost:   'text-slate-300 hover:text-cyan-400 hover:bg-slate-800',
}

const SIZES = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3 text-base gap-2',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
}: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
