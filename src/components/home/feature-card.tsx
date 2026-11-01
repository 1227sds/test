import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { FeatureItem } from "@/config/site"

interface FeatureCardProps {
  item: FeatureItem
}

/** 기능 소개 카드 하나 */
export function FeatureCard({ item }: FeatureCardProps) {
  const Icon = item.icon

  return (
    <Card>
      <CardHeader>
        <Icon className="mb-2 size-6 text-muted-foreground" aria-hidden />
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
