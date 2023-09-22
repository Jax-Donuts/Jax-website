import { req } from '@/shared/client'
import { useCallback } from 'react'

export function useDeleteProduct(getProducts: () => Promise<void>) {
  const deleteProduct = useCallback(
    async (id: string) => {
      await req('DELETE /product/[id]', { params: { id } })
      await getProducts()
    },
    [getProducts],
  )

  return { deleteProduct }
}
