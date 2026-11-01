"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TodoItem } from "@/components/todo/todo-item"
import { useTodoStore } from "@/stores/todo-store"

/** Zustand 스토어를 사용하는 할 일 목록 예제 */
export function TodoPanel() {
  const todos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const removeTodo = useTodoStore((state) => state.removeTodo)
  const [title, setTitle] = useState("")

  const doneCount = todos.filter((todo) => todo.done).length

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    addTodo(trimmed)
    setTitle("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>할 일 목록</CardTitle>
        <CardDescription>Zustand 전역 상태 예제입니다.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="할 일을 입력하세요"
            aria-label="할 일 입력"
          />
          <Button type="submit">추가</Button>
        </form>

        <p className="text-sm text-muted-foreground">
          완료 {doneCount} / 전체 {todos.length}
        </p>

        {todos.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            등록된 할 일이 없습니다.
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onRemove={removeTodo}
              />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
