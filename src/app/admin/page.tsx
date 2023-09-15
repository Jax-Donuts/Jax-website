'use client'

import { PageHeader } from '@/components/page-header/page-header'
import { Container, Group, Modal } from '@mantine/core'
import EditProductForm from './edit-product-form'

import { SubmitButton } from '@/components'
import { useDisclosure } from '@mantine/hooks'
import { Product } from '@prisma/client'
import { useState } from 'react'
import { ProductsTable } from './products-table/products-table'
import { useAddProduct } from './use-add-product'

export default function Admin() {
  const [opened, { open, close }] = useDisclosure(false)
  const [editingProduct, setEditingProduct] = useState<Product>()
  const { product, createProduct } = useAddProduct()
  const data: Product[] = []
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
          data={data}
          openEdit={(product) => {
            setEditingProduct(product)
            open()
          }}
        />
      </Container>
    </>
  )
}
