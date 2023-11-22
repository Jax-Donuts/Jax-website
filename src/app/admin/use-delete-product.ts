import { req } from '@/shared/client'
import { useCallback } from 'react'

export function useDeleteProduct(getProducts: () => Promise<void>) {
  const deleteProduct = useCallback(
    async (id: string) => {
      try {
        await req('DELETE /product/[id]', { params: { id } })
      } catch (error) {
        if (error instanceof Error) alert(error.message)
      }
      await getProducts()
    },
    [getProducts],
  )

  return { deleteProduct }
}
