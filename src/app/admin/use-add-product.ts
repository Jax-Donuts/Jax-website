import { req } from '@/shared/client' //client to talk to backend
import { ProductAttr } from '@/shared/product-types'
import { Product } from '@prisma/client' //product data type from db
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
