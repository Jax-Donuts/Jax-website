import { req } from '@/shared/client'
import { ProductDto } from '@/shared/product-types'
import { useCallback, useEffect, useState } from 'react'

export function useGetProducts() {
  const [products, setProducts] = useState<ProductDto[]>([])
  const getProducts = useCallback(async () => {
    try {
      const fetchedProducts = await req('GET /products', {})

      setProducts(fetchedProducts)
    } catch (error) {
      console.error('Error fetching products', error)
    }
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return { products, getProducts }
}
