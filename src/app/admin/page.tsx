'use client'

import { SubmitButton } from '@/components'
import { PageHeader } from '@/components/page-header/page-header'
import { Container, Group, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Product } from '@prisma/client'
import { useEffect, useState } from 'react'
import EditProductForm from './edit-product-form'
import { ProductsTable } from './products-table/products-table'
import { useGetData } from './use-get-products'

export default function Admin() {
  const [opened, { open, close }] = useDisclosure(false)
  const [editingProduct, setEditingProduct] = useState<Product>()
  const { products, getProducts } = useGetData()
  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          setEditingProduct(undefined)
          close()
        }}
      >
        <EditProductForm product={editingProduct} />
      </Modal>

      <PageHeader title="admin" />
      <Group position="center" m={10}>
        <SubmitButton text="Create Product" onClick={open} />
      </Group>
      <Container fluid px="10rem">
        <ProductsTable
          products={products}
          openEdit={(product) => {
            setEditingProduct(product)
            open()
          }}
        />
      </Container>
    </>
  )
}
