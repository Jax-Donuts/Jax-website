import { req } from '@/shared/client'
import { ProductAttr, ProductDto } from '@/shared/product-types'
import { useCallback, useState } from 'react'

export function useAddProduct() {
  const [product, setProduct] = useState<ProductDto>()
  const createProduct = useCallback(async (productAttr: ProductAttr) => {
    setProduct(
      await req('POST /product', {
        data: productAttr,
      }),
    )
  }, [])

  return { product, createProduct }
}
