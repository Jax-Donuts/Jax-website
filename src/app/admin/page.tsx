'use client'

import { PageHeader } from '@/components/page-header/page-header'
import { Container, Group, Modal } from '@mantine/core'
import EditProductForm from './edit-product-form'

import { SubmitButton } from '@/components'
import { useDisclosure } from '@mantine/hooks'
import { Prisma, Product } from '@prisma/client'
import { useState } from 'react'
import { ProductsTable } from './products-table/products-table'

export default function Admin() {
  const [opened, { open, close }] = useDisclosure(false)
  const [editingProduct, setEditingProduct] = useState<Product>()
  const data: Product[] = [
    {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'chocolate',
      displayName: 'Chocolate Glaze',
      price: new Prisma.Decimal(0.69),
      type: 'donuts',
      families: ['raised'],
      description: '',
      available: true,
    },
    {
      id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'glaze',
      displayName: 'Glaze',
      price: new Prisma.Decimal(1.69),
      type: 'donuts',
      families: ['raised', 'filled'],
      description: '',
      available: true,
    },
  ]
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
