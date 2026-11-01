import Link from "next/link";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="text-3xl font-bold tracking-tight">페이지를 찾을 수 없습니다</h1>
      <p className="text-muted-foreground">요청하신 주소가 없거나 이동되었습니다.</p>
      <Button nativeButton={false} render={<Link href="/" />}>홈으로 돌아가기</Button>
    </Container>
  );
}
