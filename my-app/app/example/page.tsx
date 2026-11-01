import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { ToastDemo } from "@/components/common/toast-demo";
import { ContactForm } from "@/components/forms/contact-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "예제",
  description: "스타터킷에 포함된 공용 컴포넌트 데모",
};

export default function ExamplePage() {
  return (
    <Container className="py-12">
      <PageHeader
        title="컴포넌트 예제"
        description="스타터킷에 포함된 shadcn/ui 컴포넌트와 공용 컴포넌트를 확인하세요."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>버튼 & 뱃지</CardTitle>
            <CardDescription>기본 액션과 상태 표시 요소입니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>기본</Button>
              <Button variant="secondary">보조</Button>
              <Button variant="outline">외곽선</Button>
              <Button variant="ghost">고스트</Button>
              <Button variant="destructive">삭제</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>기본</Badge>
              <Badge variant="secondary">보조</Badge>
              <Badge variant="outline">외곽선</Badge>
              <Badge variant="destructive">경고</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>토스트 알림</CardTitle>
            <CardDescription>sonner 기반 알림을 확인합니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <ToastDemo />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>로딩 스켈레톤</CardTitle>
            <CardDescription>데이터를 불러오는 동안 보여주는 자리 표시자입니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>문의 폼</CardTitle>
            <CardDescription>react-hook-form + zod 검증 예제입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
