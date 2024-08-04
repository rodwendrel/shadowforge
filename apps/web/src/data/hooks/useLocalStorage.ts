'use client'
import { useCallback } from "react"

export default function useLocalStorage() {
  const get = useCallback((key: string) => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }, [])

const remove = useCallback((key: string) => {
  window.localStorage.removeItem(key)
}, [])

const set = useCallback((key: string, value: any) => {
  window.localStorage?.setItem(key, JSON.stringify(value))

}, [])

return {get, set, remove}
}

