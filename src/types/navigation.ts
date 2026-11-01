import type { LucideIcon } from "lucide-react"

/** 내비게이션 메뉴 항목 */
export interface NavItem {
  title: string
  href: string
  icon?: LucideIcon
}
