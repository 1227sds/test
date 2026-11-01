---
description: shadcn/ui 컴포넌트를 추가하고 Base UI 기반 규칙, 린트, 빌드까지 확인
argument-hint: <컴포넌트 이름, 여러 개면 공백으로 구분. 예: dialog tabs>
---

shadcn/ui 컴포넌트를 추가해 줘. 인자: `$ARGUMENTS`

인자가 비어 있으면 어떤 컴포넌트를 추가할지 먼저 물어봐.

## 프로젝트 설정

- `components.json`: style `base-nova`, iconLibrary `lucide`, alias `@/components/ui`, `@/lib/utils`.
- 이 프로젝트의 컴포넌트는 Base UI(`@base-ui/react`) 기반이야. Radix 기반 예제 코드를 그대로 가져오지 마.
- 기존 컴포넌트(`components/ui/*.tsx`)를 먼저 읽고 `cn()` 사용, `data-slot` 속성, variant 정의 방식을 맞춰.

## 절차

1. 이미 있는 컴포넌트인지 `components/ui/`에서 확인. 있으면 덮어쓰기 전에 사용자에게 알려줘.
2. `npx shadcn@latest add $ARGUMENTS` 실행. 중간에 프롬프트가 나오면 기존 설정(`components.json`)을 따라.
3. 새로 생성된 파일을 읽고 다음을 확인:
   - Radix 관련 import(`@radix-ui/*`)가 섞여 있지 않은지. 있으면 Base UI 방식으로 바꿔.
   - 이 프로젝트에 이미 있는 `components/ui/*`와 import 경로, 스타일이 맞는지.
   - `'use client'`가 필요한 컴포넌트에만 붙어 있는지.
4. 새 의존성이 `package.json`에 추가됐는지 확인하고, 추가됐다면 어떤 패키지인지 알려줘.
5. 추가한 컴포넌트를 `app/example/page.tsx`에 데모로 넣을지 사용자에게 물어봐. 자동으로 수정하지 마.

## 검증

1. `npm run lint`
2. `npx tsc --noEmit`
3. 콘솔 경고 확인: 과거에 Base UI 경고가 있었으니(커밋 `Base UI 경고 수정`), `npm run dev`로 띄운 뒤 `/example` 페이지에서 경고가 나오지 않는지 확인.
   - 브라우저를 직접 띄울 수 없으면 이 단계는 건너뛰고 "미확인"이라고 명시해.

## 보고

- 추가된 파일 목록
- 새 의존성 여부
- 린트, 타입 검사 결과 (실패했다면 출력 원문 일부)
- 수동으로 확인해야 할 항목
