//import { req } from '@/shared/client'
import { Product } from '@prisma/client'
//import { ProductAttr } from '@/shared/product-types'
import { useCallback, useEffect, useState } from 'react'

export function useGetData() {
  const [products, setProducts] = useState<Product[]>([])
  const getProducts = useCallback(async () => {
    try {
      const response = await fetch('/api/products', { method: 'GET' })
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const productsData = await response.json()
      setProducts(productsData)
    } catch (error) {
      console.error('Error fetching prodcuts', error)
    }
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return { products, getProducts }
}
