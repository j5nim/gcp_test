import type { NextConfig } from 'next'

// Firebase App Hosting 환경 최적화 설정
// Next.js App Router의 SSR/SSG가 자동으로 처리됨
const nextConfig: NextConfig = {
  images: {
    // 사용할 외부 이미지 도메인을 여기에 추가
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
