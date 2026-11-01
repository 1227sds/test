import type { Metadata } from "next"
import { ContactForm } from "@/components/forms/contact-form"
import { TodoPanel } from "@/components/todo/todo-panel"

export const metadata: Metadata = {
  title: "예제",
  description: "폼 검증과 전역 상태 관리 예제 페이지",
}

/** 폼(RHF + Zod)과 Zustand 예제를 보여주는 페이지 */
export default function ExamplePage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2">
      <ContactForm />
      <TodoPanel />
    </div>
  )
}
