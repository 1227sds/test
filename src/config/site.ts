import {
  DatabaseIcon,
  FileTextIcon,
  HouseIcon,
  LayoutGridIcon,
  PaletteIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react"
import type { NavItem } from "@/types/navigation"

/** 사이트 공통 정보. 프로젝트에 맞게 수정하세요. */
export const siteConfig = {
  name: "Starter Kit",
  description: "Next.js 15 App Router 기반 웹 개발 스타터킷",
} as const

/** 헤더와 모바일 메뉴에서 공유하는 내비게이션 목록 */
export const mainNavItems: NavItem[] = [
  { title: "홈", href: "/", icon: HouseIcon },
  { title: "예제", href: "/example", icon: FileTextIcon },
]

/** 랜딩 페이지에 노출되는 기능 소개 항목 */
export interface FeatureItem {
  title: string
  description: string
  icon: LucideIcon
}

/** 랜딩 페이지 기능 소개 목록 */
export const featureItems: FeatureItem[] = [
  {
    title: "빠른 시작",
    description: "Next.js 15 App Router와 TypeScript로 바로 개발을 시작할 수 있습니다.",
    icon: ZapIcon,
  },
  {
    title: "반응형 레이아웃",
    description: "모바일부터 데스크톱까지 대응하는 헤더와 그리드 예제를 제공합니다.",
    icon: LayoutGridIcon,
  },
  {
    title: "다크 모드",
    description: "next-themes로 시스템 설정을 따르며 수동 전환도 가능합니다.",
    icon: PaletteIcon,
  },
  {
    title: "폼 검증",
    description: "React Hook Form과 Zod를 연결한 타입 안전한 폼 예제를 포함합니다.",
    icon: FileTextIcon,
  },
  {
    title: "상태 관리",
    description: "Zustand 스토어 예제로 전역 상태를 간단하게 다룹니다.",
    icon: DatabaseIcon,
  },
]
