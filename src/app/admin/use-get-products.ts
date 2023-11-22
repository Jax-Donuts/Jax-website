import { req } from '@/shared/client'
import { ProductDto } from '@/shared/product-types'
import { useDisclosure } from '@mantine/hooks'
import { useCallback, useEffect, useState } from 'react'

export function useGetProducts() {
  const [isLoading, { open, close }] = useDisclosure(false)
  const [products, setProducts] = useState<ProductDto[]>([])
  const getProducts = useCallback(async () => {
    try {
      open()
      const fetchedProducts = await req('GET /products', {})
      setProducts(fetchedProducts)
      close()
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return { products, getProducts, isLoading }
}
