import { ProductDto } from '@/shared/product-types'
import { keys } from '@mantine/utils'
import { useCallback, useState } from 'react'

export function useProductTableSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const filterBySearch = useCallback((data: ProductDto[], search: string) => {
    const query = search.toLowerCase().trim()
    return data.filter((item) => keys(data[0]).some((key) => item[key].toLocaleString().toLowerCase().includes(query)))
  }, [])

  return { searchQuery, setSearchQuery, filterBySearch }
}
