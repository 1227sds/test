import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

/** 랜딩 페이지 상단 히어로 영역 */
export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center sm:py-28">
      <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
        Next.js 15 · TypeScript · Tailwind CSS v4
      </span>
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        {siteConfig.name}로 웹 서비스를 빠르게 시작하세요
      </h1>
      <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
        {siteConfig.description}입니다. shadcn/ui 컴포넌트와 함께 바로 쓸 수 있는 구조를 제공합니다.
      </p>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button size="lg" render={<Link href="/example" />}>
          예제 보러 가기
        </Button>
        <Button
          size="lg"
          variant="outline"
          render={
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          shadcn/ui 문서
        </Button>
      </div>
    </section>
  )
}
