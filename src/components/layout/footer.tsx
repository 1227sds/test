import { siteConfig } from "@/config/site"

/** 모든 페이지 하단의 푸터 */
export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>Built with Next.js · shadcn/ui · Tailwind CSS</p>
      </div>
    </footer>
  )
}
