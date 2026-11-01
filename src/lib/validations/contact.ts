import { z } from "zod"

/** 문의 폼 검증 스키마. 클라이언트와 서버에서 함께 재사용할 수 있습니다. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: "이름은 2자 이상 입력해주세요." }),
  email: z.email({ error: "올바른 이메일 형식이 아닙니다." }),
})

/** 문의 폼 입력값 타입 */
export type ContactFormValues = z.infer<typeof contactSchema>
