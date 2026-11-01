import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center">
      <Badge variant="secondary">Next.js 16 · React 19 · Tailwind v4</Badge>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        빠르게 시작하는 <span className="text-primary">웹 개발 스타터킷</span>
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        레이아웃, 다크 모드, 폼 검증, 알림까지 준비되어 있어 바로 기능 개발에 집중할 수
        있습니다.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" nativeButton={false} render={<Link href="/example" />}>
          컴포넌트 예제 보기
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" />}
        >
          shadcn/ui 문서
        </Button>
      </div>
    </section>
  );
}
