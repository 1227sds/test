import { cn } from "@/lib/utils";

/** 페이지 공통 최대 너비와 좌우 여백을 담당합니다. */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
