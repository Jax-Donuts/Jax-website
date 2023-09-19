import { req } from '@/shared/client'
import { ProductAttr } from '@/shared/product-types'
import { Product } from '@prisma/client'
import { useCallback, useState } from 'react'

export function useAddProduct() {
  const [product, setProduct] = useState<Product>()
  const createProduct = useCallback(async (productData: ProductAttr) => {
    setProduct(
      await req('/api/product', {
        method: 'post',
        data: productData,
      }),
    )
  }, [])

  return { product, createProduct }
}
