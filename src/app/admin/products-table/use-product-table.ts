import { keys } from '@mantine/utils'
import { Product } from '@prisma/client'
import { useCallback, useState } from 'react'

export function useProductTable(data: Product[]) {
  const [selection, setSelection] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState(data)
  const [sortBy, setSortBy] = useState<keyof Product | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  const filterData = useCallback((data: Product[], search: string) => {
    const query = search.toLowerCase().trim()
    return data.filter((item) => keys(data[0]).some((key) => item[key].toLocaleString().toLowerCase().includes(query)))
  }, [])

  const sortData = useCallback(
    (data: Product[], payload: { sortBy: keyof Product | null; reversed: boolean; search: string }) => {
      const { sortBy } = payload

      if (!sortBy) {
        return filterData(data, payload.search)
      }

      return filterData(
        [...data].sort((a, b) => {
          if (payload.reversed) {
            return b[sortBy].toLocaleString().localeCompare(a[sortBy].toLocaleString())
          }

          return a[sortBy].toLocaleString().localeCompare(b[sortBy].toLocaleString())
        }),
        payload.search,
      )
    },
    [filterData],
  )

  const toggleRow = useCallback(
    (id: string) =>
      setSelection((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id])),
    [],
  )

  const setSorting = useCallback(
    (field: keyof Product) => {
      const reversed = field === sortBy ? !reverseSortDirection : false
      setReverseSortDirection(reversed)
      setSortBy(field)
      setSortedData(sortData(data, { sortBy: field, reversed, search }))
    },
    [data, reverseSortDirection, search, sortBy, sortData],
  )

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget
      setSearch(value)
      setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }))
    },
    [data, reverseSortDirection, sortBy, sortData],
  )

  return {
    sortedData,
    sortBy,
    setSorting,
    search,
    handleSearchChange,
    reverseSortDirection,
    selection,
    toggleRow,
  }
}
