# Next.js Starter Kit

Next.js 15 App Router, TypeScript, Tailwind CSS v4, shadcn/ui, lucide-react로 구성된 웹 개발 스타터킷입니다.
빈 프로젝트에서 바로 기능을 만들 수 있도록 레이아웃, 다크 모드, 폼 검증, 전역 상태 관리 예제를 포함합니다.

## 기술 스택

| 영역 | 사용 기술 |
| --- | --- |
| 프레임워크 | Next.js 15 (App Router), React 19 |
| 언어 | TypeScript (`any` 사용 금지, ESLint로 검사) |
| 스타일 | Tailwind CSS v4 (`tailwind.config` 파일 없이 `globals.css`에서 설정) |
| UI | shadcn/ui, lucide-react |
| 다크 모드 | next-themes |
| 폼 | React Hook Form + Zod (`@hookform/resolvers`) |
| 상태 관리 | Zustand |

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 (Turbopack) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 폴더 구조

```
src/
  app/                  # 라우트 (layout, page, example/page)
  components/
    ui/                 # shadcn/ui 컴포넌트 (CLI로 추가)
    layout/             # Header, Footer, 내비게이션
    common/             # 여러 곳에서 쓰는 공용 컴포넌트 (ThemeToggle 등)
    providers/          # 전역 프로바이더 (ThemeProvider)
    home/               # 랜딩 페이지 전용 컴포넌트
    forms/              # 폼 예제 (RHF + Zod)
    todo/               # Zustand 예제 컴포넌트
  config/site.ts        # 사이트 이름, 메뉴, 기능 소개 목록
  hooks/                # 커스텀 훅
  lib/
    utils.ts            # cn() 헬퍼
    validations/        # Zod 스키마
  stores/               # Zustand 스토어
  types/                # 공용 타입
```

## 새 컴포넌트 추가하기

shadcn/ui 컴포넌트는 CLI로 추가합니다. 생성된 파일은 `src/components/ui/`에 복사되므로 자유롭게 수정할 수 있습니다.

```bash
npx shadcn@latest add dialog
npx shadcn@latest add table
```

## Tailwind CSS v4 설정

- `tailwind.config.*` 파일이 없습니다. 테마 값은 `src/app/globals.css`의 `@theme inline`과 `:root`/`.dark` CSS 변수에서 관리합니다.
- `components.json`의 `tailwind.config`는 빈 값이어야 합니다.

## 메뉴와 사이트 정보 바꾸기

- 사이트 이름, 설명, 내비게이션 항목, 랜딩 기능 목록: `src/config/site.ts`
- 메뉴를 추가하려면 `mainNavItems` 배열에 항목을 넣고, `src/app/` 아래에 해당 라우트를 만듭니다.

## 코딩 규칙

- 코드 주석과 문서는 한국어로 작성합니다. 변수·함수명은 영어입니다.
- 들여쓰기는 2칸입니다 (`.editorconfig`).
- 컴포넌트는 역할 단위로 나누고, 여러 곳에서 쓰면 `components/common/`으로 옮깁니다.
- 모든 화면은 모바일 화면부터 반응형으로 작성합니다.
- `any` 타입은 사용하지 않습니다.
