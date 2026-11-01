import { FeatureCard } from "@/components/home/feature-card"
import { featureItems } from "@/config/site"

/** 기능 소개 카드를 반응형 그리드로 배치 (모바일 1열 · 태블릿 2열 · 데스크톱 3열) */
export function FeatureGrid() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pb-20 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
      {featureItems.map((item) => (
        <FeatureCard key={item.title} item={item} />
      ))}
    </section>
  )
}
