import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import { personalInfo } from '@/lib/data'

// Inter 폰트 — CSS 변수로 주입하여 Tailwind에서 사용
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// SEO 메타데이터
export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.bio,
  keywords: ['portfolio', 'developer', 'frontend', 'backend', 'web'],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.bio,
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.bio,
  },
}

// ── 루트 레이아웃 ─────────────────────────────────────────
// App Router의 최상위 레이아웃.
// Header / main / Footer 구조로 모든 페이지에 공통 적용.
// ─────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col bg-slate-950">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
