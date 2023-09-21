import { RoundButton } from '@/components'
import { ProductDto } from '@/shared/product-types'
import { Container, Modal, ScrollArea, SimpleGrid, Table, Text, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useCallback, useEffect, useState } from 'react'
import { Search } from 'tabler-icons-react'
import { useDeleteProduct } from '../use-delete-product'
import { ProductsTableBody } from './products-table-body'
import { ProductsTableHeader } from './products-table-header'
import { useProductTableSearch } from './use-product-table-search'
import { useProductTableSelection } from './use-product-table-selection'
import { useProductTableSorting } from './use-product-table-sorting'

interface Props {
  products: ProductDto[]
  openEdit: (product: ProductDto) => void
  getProducts: () => Promise<void>
}

export function ProductsTable({ products, openEdit, getProducts }: Props) {
  const { searchQuery, setSearchQuery, filterBySearch } = useProductTableSearch()
  const { selection, toggleRow } = useProductTableSelection()
  const [isDeleteDialogOpen, { open: openDeleteDialog, close: closeDeleteDialog }] = useDisclosure(false)
  const [productToDelete, setProductToDelete] = useState<ProductDto | null>(null)
  const { deleteProduct } = useDeleteProduct(getProducts)

  const {
    reverseSortDirection,
    sortedAndFilteredData,
    sortByKey,
    applySortingToggles,
    setSortedAndFilteredData,
    applySortAndFilter,
  } = useProductTableSorting(products, searchQuery, filterBySearch)

  const searchHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget
      setSearchQuery(value)
      setSortedAndFilteredData(
        applySortAndFilter(products, { sortByKey, reversed: reverseSortDirection, search: value }),
      )
    },
    [products, reverseSortDirection, setSearchQuery, setSortedAndFilteredData, sortByKey, applySortAndFilter],
  )

  useEffect(() => {
    setSortedAndFilteredData(applySortAndFilter(products, { sortByKey, reversed: reverseSortDirection, search: '' }))
  }, [applySortAndFilter, products, reverseSortDirection, setSortedAndFilteredData, sortByKey])

  function closeModal() {
    closeDeleteDialog()
    setProductToDelete(null)
  }

  return (
    <Container>
      <Modal
        opened={isDeleteDialogOpen}
        onClose={closeModal}
        title={
          <Text align="center" tt="uppercase">
            delete donut
          </Text>
        }
      >
        <div style={{ border: '2px solid #fa5252', padding: 10, borderRadius: 5 }}>
          <Text align="center">Are you sure you want to delete</Text>
          <Text align="center">&quot;{productToDelete?.name}&quot;</Text>
          <SimpleGrid cols={2} mt={20}>
            <RoundButton text="Cancel" onClick={closeModal} />
            <RoundButton
              text="Yes"
              onClick={() => {
                if (productToDelete) deleteProduct(productToDelete?.id)
                else alert('null id')
                closeModal()
              }}
            />
          </SimpleGrid>
        </div>
      </Modal>
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
            openDelete={(product) => {
              openDeleteDialog()
              setProductToDelete(product)
            }}
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
