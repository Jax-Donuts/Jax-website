import { req } from '@/shared/client'
import { ProductAttr } from '@/shared/product-types'
import { useCallback } from 'react'

export function useEditProduct(getProducts: () => Promise<void>) {
  const editProduct = useCallback(
    async (id: string, updatedProduct: ProductAttr) => {
      try {
        await req('PUT /product/[id]', { params: { id }, data: updatedProduct })
        await getProducts()
      } catch (error) {
        console.error('Error in editProduct:', error)
      }
    },
    [getProducts],
  )

  return { editProduct }
}
