import Hero     from '@/components/sections/Hero'
import About    from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Footer   from '@/components/layout/Footer'

// ── 포트폴리오 메인 페이지 ────────────────────────────────
// 섹션 순서: Hero → About(전공+기술) → Projects → Footer
// ─────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  )
}
