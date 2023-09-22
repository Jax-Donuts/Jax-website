import { ProductDto } from '@/shared/product-types'
import { useCallback, useState } from 'react'

export function useProductTableSorting(
  products: ProductDto[],
  searchQuery: string,
  filterBySearch: (data: ProductDto[], search: string) => ProductDto[],
) {
  const [sortedAndFilteredData, setSortedAndFilteredData] = useState(products)
  const [sortByKey, setSortByKey] = useState<keyof ProductDto | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  const applySortAndFilter = useCallback(
    (data: ProductDto[], payload: { sortByKey: keyof ProductDto | null; reversed: boolean; search: string }) => {
      const { sortByKey } = payload

      if (!sortByKey) return filterBySearch(data, payload.search)

      return filterBySearch(
        [...data].sort((a, b) => {
          if (payload.reversed) {
            return b[sortByKey].toLocaleString().localeCompare(a[sortByKey].toLocaleString())
          }

          return a[sortByKey].toLocaleString().localeCompare(b[sortByKey].toLocaleString())
        }),
        payload.search,
      )
    },
    [filterBySearch],
  )

  const applySortingToggles = useCallback(
    (field: keyof ProductDto) => {
      const reversed = field === sortByKey ? !reverseSortDirection : false
      setReverseSortDirection(reversed)
      setSortByKey(field)
      setSortedAndFilteredData(applySortAndFilter(products, { sortByKey: field, reversed, search: searchQuery }))
    },
    [products, reverseSortDirection, searchQuery, sortByKey, applySortAndFilter],
  )

  return {
    reverseSortDirection,
    sortedAndFilteredData,
    sortByKey,
    applySortingToggles,
    applySortAndFilter,
    setSortedAndFilteredData,
  }
}
