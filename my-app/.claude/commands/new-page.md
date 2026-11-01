---
description: 새 App Router 페이지를 프로젝트 패턴에 맞춰 생성 (page, loading, error, 테스트)
argument-hint: <경로, 예: dashboard/settings>
---

새 페이지를 만들어 줘. 인자: `$ARGUMENTS`

인자가 비어 있으면 어떤 경로에 만들지 먼저 물어봐.

## 작업 전 확인

1. `AGENTS.md`에 적힌 대로 `node_modules/next/dist/docs/`에서 App Router 관련 가이드를 먼저 읽어. 이 버전(Next.js 16)은 학습 데이터와 다를 수 있어.
2. `app/example/page.tsx`, `components/common/page-header.tsx`, `app/loading.tsx`를 읽고 기존 패턴을 따라.

## 생성할 파일

`app/$ARGUMENTS/` 아래에 다음을 만들어:

- `page.tsx`
  - `Metadata`를 export하고 `title`, `description`은 한국어로 작성.
  - `Container`와 `PageHeader`로 레이아웃 구성.
  - 기본 export는 함수 컴포넌트.
- `loading.tsx`: `Skeleton`으로 로딩 자리 표시자를 만들어. 페이지 구조와 비슷하게.
- `error.tsx`: `'use client'`를 붙이고 `error`, `reset` props를 받는 에러 화면. 재시도 버튼 포함.

`app/error.tsx`와 `app/loading.tsx`의 기존 구현을 참고해서 스타일을 맞춰.

## 네비게이션

- `config/site.ts`의 `siteConfig.nav`에 새 페이지를 추가할지 사용자에게 한 번 물어봐. 자동으로 추가하지 마.

## 테스트

- `tests/<페이지-이름>.spec.ts`를 만들어. 최소한 다음을 확인:
  - 페이지가 200으로 열리고 `h1` 제목이 보인다.
- `playwright.config.ts`의 `baseURL`이 주석 처리되어 있으므로, 테스트에서는 `page.goto('/경로')`가 동작하도록 `baseURL` 설정이 필요한지 확인하고 사용자에게 알려줘.

## 검증

1. `npm run lint` 실행.
2. 타입 검사를 위해 `npx tsc --noEmit` 실행.
3. 실패하면 원인을 고치고 다시 실행.

끝나면 만든 파일 목록과 다음에 할 일(네비게이션 추가 여부, 테스트 실행 방법)을 짧게 요약해 줘.
