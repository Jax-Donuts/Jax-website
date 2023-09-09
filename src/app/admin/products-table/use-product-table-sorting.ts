import { Product } from '@prisma/client'
import { useCallback, useState } from 'react'

export function useProductTableSorting(
  data: Product[],
  searchQuery: string,
  filterBySearch: (data: Product[], search: string) => Product[],
) {
  const [sortedAndFilteredData, setSortedAndFilteredData] = useState(data)
  const [sortByKey, setSortByKey] = useState<keyof Product | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  const applySortAndFilter = useCallback(
    (data: Product[], payload: { sortByKey: keyof Product | null; reversed: boolean; search: string }) => {
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
    (field: keyof Product) => {
      const reversed = field === sortByKey ? !reverseSortDirection : false
      setReverseSortDirection(reversed)
      setSortByKey(field)
      setSortedAndFilteredData(applySortAndFilter(data, { sortByKey: field, reversed, search: searchQuery }))
    },
    [data, reverseSortDirection, searchQuery, sortByKey, applySortAndFilter],
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
