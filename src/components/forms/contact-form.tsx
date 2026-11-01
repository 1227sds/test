"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact"

/** React Hook Form + Zod를 연결한 문의 폼 예제 */
export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "" },
  })

  // 실제 서비스에서는 이 함수 안에서 API 요청을 보내세요.
  async function onSubmit(values: ContactFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 500))
    toast.success("문의가 접수되었습니다.", {
      description: `${values.name} (${values.email})`,
    })
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>문의하기</CardTitle>
        <CardDescription>
          폼 검증 예제입니다. 값을 비워두거나 잘못 입력한 뒤 제출해 보세요.
        </CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-name">이름</FieldLabel>
                  <Input
                    {...field}
                    id="contact-name"
                    placeholder="홍길동"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-email">이메일</FieldLabel>
                  <Input
                    {...field}
                    id="contact-email"
                    type="email"
                    placeholder="hello@example.com"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full sm:w-auto"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "전송 중..." : "제출"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
