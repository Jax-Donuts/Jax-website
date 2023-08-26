import { req } from '@/shared/client'
import { useCallback } from 'react'

export function useMenuHeader() {
  const getProducts = useCallback(async () => {
    const data = await req('/api/products', { method: 'get' })
  }, [])
  return
}
