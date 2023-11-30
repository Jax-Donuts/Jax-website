import { req } from '@/shared/client'
import { ProductAttr, ProductDto } from '@/shared/product-types'
import { useCallback, useState } from 'react'

export function useAddProduct(getProducts: () => Promise<void>) {
  const [product, setProduct] = useState<ProductDto>()
  const createProduct = useCallback(
    async (productAttr: ProductAttr) => {
      try {
        const newProduct = await req('POST /product', {
          data: productAttr,
        })
        setProduct(newProduct)
      } catch (error) {
        if (error instanceof Error) alert(error.message)
      }
      await getProducts()
    },
    [getProducts],
  )

  return { product, createProduct }
}
