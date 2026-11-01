import { Blocks, BellRing, FileCode, MoonStar, Paintbrush, TextCursorInput } from "lucide-react";

import { FeatureCard } from "@/components/home/feature-card";

const features = [
  {
    icon: FileCode,
    title: "TypeScript",
    description: "타입 안정성을 기본으로 갖춘 Next.js App Router 구조입니다.",
  },
  {
    icon: Paintbrush,
    title: "Tailwind CSS",
    description: "유틸리티 클래스로 빠르게 스타일링하고 디자인 토큰을 공유합니다.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui",
    description: "복사해서 쓰는 고품질 컴포넌트를 필요한 만큼만 추가합니다.",
  },
  {
    icon: MoonStar,
    title: "다크 모드",
    description: "next-themes로 시스템 설정을 따르는 라이트/다크 테마를 지원합니다.",
  },
  {
    icon: TextCursorInput,
    title: "폼 & 검증",
    description: "react-hook-form과 zod로 타입 안전한 폼 검증을 구현합니다.",
  },
  {
    icon: BellRing,
    title: "토스트 알림",
    description: "sonner 기반 알림으로 사용자에게 결과를 간결하게 전달합니다.",
  },
];

export function FeatureGrid() {
  return (
    <section aria-labelledby="features-title" className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 id="features-title" className="text-2xl font-bold tracking-tight">
          포함된 기능
        </h2>
        <p className="text-muted-foreground">
          새 프로젝트를 시작할 때 필요한 것들을 미리 갖춰두었습니다.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
