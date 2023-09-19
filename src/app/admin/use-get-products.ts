import { Product } from '@prisma/client'
import { useCallback, useEffect, useState } from 'react'

export function useGetData() {
  const [products, setProducts] = useState<Product[]>([])
  const getProducts = useCallback(async () => {
    try {
      const response = await fetch('/api/products', { method: 'GET' })
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const fetchedProducts = await response.json()
      setProducts(fetchedProducts)
    } catch (error) {
      console.error('Error fetching prodcuts', error)
    }
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return { products, getProducts }
}
