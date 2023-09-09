import { Container, ScrollArea, Table, Text, TextInput } from '@mantine/core'
import { Product } from '@prisma/client'
import { useCallback } from 'react'
import { Search } from 'tabler-icons-react'
import { ProductsTableBody } from './products-table-body'
import { ProductsTableHeader } from './products-table-header'
import { useProductTableSelection } from './use-product-table-selection'

import { useProductTableSearch } from './use-product-table-search'
import { useProductTableSorting } from './use-product-table-sorting'

interface Props {
  data: Product[]
  openEdit: (product: Product) => void
}

export function ProductsTable({ data, openEdit }: Props) {
  const { searchQuery, setSearchQuery, filterBySearch } = useProductTableSearch()
  const { selection, toggleRow } = useProductTableSelection()

  const {
    reverseSortDirection,
    sortedAndFilteredData,
    sortByKey,
    applySortingToggles,
    setSortedAndFilteredData,
    applySortAndFilter,
  } = useProductTableSorting(data, searchQuery, filterBySearch)

  const searchHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget
      setSearchQuery(value)
      setSortedAndFilteredData(applySortAndFilter(data, { sortByKey, reversed: reverseSortDirection, search: value }))
    },
    [data, reverseSortDirection, setSearchQuery, setSortedAndFilteredData, sortByKey, applySortAndFilter],
  )

  return (
    <Container>
      <ScrollArea>
        <TextInput
          placeholder="Search by any field"
          mb="md"
          icon={<Search size="0.9rem" />}
          value={searchQuery}
          onChange={searchHandler}
        />
        <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} sx={{ tableLayout: 'fixed' }}>
          <ProductsTableHeader
            reverseSortDirection={reverseSortDirection}
            sortByKey={sortByKey}
            applySortingToggles={applySortingToggles}
          />
          <ProductsTableBody
            sortedAndFilteredData={sortedAndFilteredData}
            selection={selection}
            toggleRow={toggleRow}
            openEdit={openEdit}
          />
        </Table>
        {sortedAndFilteredData.length === 0 ? (
          <Text align="center" m={10}>
            No Data
          </Text>
        ) : null}
      </ScrollArea>
    </Container>
  )
}
