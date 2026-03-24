'use client'

import { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '@/lib/data'
import Button from '@/components/ui/Button'

// ── 헤더 / 네비게이션 컴포넌트 ──────────────────────────────
// - 스크롤 감지: 20px 이상 내려가면 반투명 배경 적용
// - 모바일: 햄버거 메뉴 토글
// - 데스크탑: 가로 네비게이션
// ─────────────────────────────────────────────────────────

export default function Header() {
  const [isScrolled, setIsScrolled]       = useState(false)
  const [isMobileOpen, setIsMobileOpen]   = useState(false)

  // 스크롤 이벤트 감지
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 모바일 메뉴 열릴 때 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const closeMenu = () => setIsMobileOpen(false)

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">

          {/* 로고 */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <span className="text-cyan-400">{personalInfo.name.split(' ')[0]}</span>
            <span className="text-slate-100">.</span>
          </a>

          {/* 데스크탑 네비게이션 */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-800/50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 이력서 버튼 (데스크탑) */}
          <div className="hidden md:block">
            <Button href={personalInfo.resumeUrl} variant="outline" size="sm" target="_blank">
              Resume
            </Button>
          </div>

          {/* 햄버거 버튼 (모바일) */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-800/50"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMobileOpen}
          >
            {/* 햄버거 ↔ X 아이콘 */}
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* 모바일 드롭다운 메뉴 */}
        <div
          className={[
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <div className="border-t border-slate-800 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <Button href={personalInfo.resumeUrl} variant="outline" size="sm" target="_blank" className="w-full justify-center">
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
