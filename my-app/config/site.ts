import type { SiteConfig } from "@/types/site";

/** 사이트 전역 설정. 이름, 설명, 메뉴를 한 곳에서 관리합니다. */
export const siteConfig: SiteConfig = {
  name: "Next Starter Kit",
  description:
    "Next.js · TypeScript · Tailwind CSS · shadcn/ui 기반의 빠른 웹 개발 스타터킷",
  url: "http://localhost:3000",
  nav: [
    { title: "홈", href: "/", description: "스타터킷 소개" },
    { title: "예제", href: "/example", description: "컴포넌트 데모" },
  ],
};
