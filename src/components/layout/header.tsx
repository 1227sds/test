import Link from "next/link"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { DesktopNav } from "@/components/layout/desktop-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { siteConfig } from "@/config/site"

/** 모든 페이지 상단에 고정되는 헤더 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <Link href="/" className="text-lg font-bold tracking-tight">
            {siteConfig.name}
          </Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <DesktopNav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
