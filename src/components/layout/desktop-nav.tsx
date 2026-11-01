"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { mainNavItems } from "@/config/site"
import { cn } from "@/lib/utils"

/** 태블릿 이상 화면에서 보이는 상단 내비게이션 */
export function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden items-center gap-6 md:flex" aria-label="주요 메뉴">
      {mainNavItems.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground",
              active ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
