import { create } from "zustand"

/** 할 일 항목 */
export interface Todo {
  id: string
  title: string
  done: boolean
}

interface TodoState {
  todos: Todo[]
  addTodo: (title: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
}

/** 예제용 할 일 전역 상태 스토어 (Zustand) */
export const useTodoStore = create<TodoState>()((set) => ({
  todos: [],
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: crypto.randomUUID(), title, done: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}))
