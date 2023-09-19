import { req } from '@/shared/client'
import { productAttr } from '@/shared/product-types'
import { Product } from '@prisma/client'
import { useCallback, useState } from 'react'

export function useAddProduct() {
  const [product, setProduct] = useState<Product>()
  const createProduct = useCallback(async (productData: productAttr) => {
    setProduct(
      await req('/api/product', {
        method: 'post',
        data: productData,
      }),
    )
  }, [])

  return { product, createProduct }
}
