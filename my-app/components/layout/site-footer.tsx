import { Container } from "@/components/common/container";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  // Cache Components 환경에서는 렌더링 중 new Date()를 쓸 수 없어 연도는 표시하지 않습니다.
  return (
    <footer className="mt-auto w-full">
      <Separator />
      <Container className="flex flex-col gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {siteConfig.name}. All rights reserved.</p>
        <p>Next.js · Tailwind CSS · shadcn/ui</p>
      </Container>
    </footer>
  );
}
