# Next.js Starter Kit

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · lucide-react 기반의 웹 개발 스타터킷입니다.

## 시작하기

```bash
npm install
npm run dev     # 개발 서버 http://localhost:3000
npm run build   # 프로덕션 빌드
npm run start   # 빌드 결과 실행
npm run lint    # ESLint
```

## 폴더 구조

```
app/                  라우트 (layout, page, example/, not-found, error, loading)
components/
  ui/                 L0~L1 shadcn/ui 컴포넌트 (CLI로 설치, 직접 수정 가능)
  common/             L2 프로젝트 공용 (theme-toggle, logo, container, page-header)
  layout/             L3 레이아웃 (site-header, desktop-nav, mobile-nav, site-footer)
  home/               L4 홈 섹션 (hero-section, feature-grid, feature-card)
  forms/              L4 폼 예제 (contact-form)
  providers/          전역 Provider (theme-provider)
config/site.ts        사이트 이름, 설명, 메뉴 설정
types/                공용 타입
lib/utils.ts          cn() (clsx + tailwind-merge)
lib/validations/      zod 스키마
```

의존 방향은 위에서 아래로만 흐릅니다. 상위 계층(L4, 페이지)은 하위 계층을 가져다 쓰고, 하위 계층은 상위를 가져오지 않습니다.

## 설정 변경

사이트 이름과 메뉴는 `config/site.ts`에서 수정하면 헤더, 푸터, 메타데이터에 함께 반영됩니다.

```ts
nav: [
  { title: "홈", href: "/" },
  { title: "예제", href: "/example" },
],
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add dialog tabs tooltip
```

설치 후 `components/ui/`에서 생성된 파일을 확인하세요. 이 프로젝트는 base-ui 기반(`base-nova` 스타일)이므로 `asChild` 대신 `render` prop을 사용합니다.

```tsx
<Button render={<Link href="/example" />}>예제 보기</Button>
```

## 사용 중인 라이브러리

| 기능 | 라이브러리 |
|---|---|
| 클래스 병합 | `clsx`, `tailwind-merge` |
| 다크 모드 | `next-themes` |
| 토스트 | `sonner` |
| 폼 | `react-hook-form`, `@hookform/resolvers` |
| 검증 | `zod` |
| 공용 훅 | `usehooks-ts` |
| 날짜 | `date-fns` |
| 아이콘 | `lucide-react` |

직접 구현하기 전에 위 라이브러리나 `usehooks-ts`에 같은 기능이 있는지 먼저 확인하세요.

## 참고

- Next.js 16에는 Cache Components가 켜져 있습니다. 렌더링 중 `new Date()` 같은 값은 프리렌더 오류를 일으키므로 `"use cache"` 또는 클라이언트 컴포넌트로 옮기세요.
- `params`와 `searchParams`는 Promise입니다. `await`해서 사용하세요.
- 공식 문서는 `node_modules/next/dist/docs/`에 함께 설치됩니다.
