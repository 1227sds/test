"use client"

import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

/**
 * 클라이언트에서 마운트되었는지 반환합니다.
 * 서버 렌더링 결과와 클라이언트 렌더링 결과가 달라지는 것을 막을 때 사용합니다.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}
