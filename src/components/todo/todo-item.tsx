"use client"

import { Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Todo } from "@/stores/todo-store"

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

/** 할 일 한 줄. 클릭하면 완료 상태가 바뀝니다. */
export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between gap-2 rounded-md border px-3 py-2">
      <button
        type="button"
        onClick={() => onToggle(todo.id)}
        className={cn(
          "min-w-0 flex-1 truncate text-left text-sm",
          todo.done && "text-muted-foreground line-through"
        )}
      >
        {todo.title}
      </button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="할 일 삭제"
        onClick={() => onRemove(todo.id)}
      >
        <Trash2Icon />
      </Button>
    </li>
  )
}
