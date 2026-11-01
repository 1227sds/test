"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast.success("저장되었습니다.")}
      >
        성공 토스트
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("새로운 알림이 있습니다.")}
      >
        정보 토스트
      </Button>
      <Button
        variant="destructive"
        onClick={() => toast.error("오류가 발생했습니다.")}
      >
        에러 토스트
      </Button>
    </div>
  );
}
