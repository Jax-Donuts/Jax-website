import { req } from '@/shared/client'
import { ProductDto } from '@/shared/product-types'
import { useCallback, useEffect, useState } from 'react'

export function useMenu() {
  const [products, setProducts] = useState<ProductDto[]>([])
  const getProducts = useCallback(async () => {
    const products = await req('GET /products', {})
    setProducts(products)
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return { products, getProducts }
}
