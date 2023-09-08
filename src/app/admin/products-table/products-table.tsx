import { ScrollArea, Table, TextInput } from '@mantine/core'
import { Product } from '@prisma/client'
import { Search } from 'tabler-icons-react'
import { ProductsTableBody } from './products-table-body'
import { ProductsTableHeader } from './products-table-header'
import { useProductTable } from './use-product-table'

interface Props {
  data: Product[]
  openEdit: (product: Product) => void
}

export function ProductsTable({ data, openEdit }: Props) {
  const { sortedData, sortBy, setSorting, search, handleSearchChange, reverseSortDirection, selection, toggleRow } =
    useProductTable(data)

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<Search size="0.9rem" />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} sx={{ tableLayout: 'fixed' }}>
        <ProductsTableHeader reverseSortDirection={reverseSortDirection} sortBy={sortBy} setSorting={setSorting} />
        <ProductsTableBody sortedData={sortedData} selection={selection} toggleRow={toggleRow} openEdit={openEdit} />
      </Table>
    </ScrollArea>
  )
}
