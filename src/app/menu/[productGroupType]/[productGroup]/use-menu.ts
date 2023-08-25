import { req } from '@/shared/client'
import { Product } from '@prisma/client'
import { useCallback, useEffect, useState } from 'react'

export function useMenu() {
  const [products, setProducts] = useState<Product[]>([])
  const getProducts = useCallback(async () => {
    const products = await req('/api/products', { method: 'get' })
    setProducts(products)
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return { products, getProducts }
}
