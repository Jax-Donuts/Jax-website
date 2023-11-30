'use client'

import { SubmitButton } from '@/components'
import { PageHeader } from '@/components/page-header/page-header'
import { ProductDto } from '@/shared/product-types'
import { Center, Container, Group, LoadingOverlay, Modal, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'
import EditProductForm from './edit-product-form'
import { ProductsTable } from './products-table/products-table'
import { useGetProducts } from './use-get-products'

export default function Admin() {
  const { data: session } = useSession()
  const [opened, { open, close }] = useDisclosure(false)
  const [editingProduct, setEditingProduct] = useState<ProductDto>()
  const { products, getProducts, isLoading } = useGetProducts()

  if (!session?.user || !session) {
    signIn()
  }
  if (!session?.user.isAdmin) {
    return (
      <Center>
        <Title transform="uppercase">not authorized</Title>
      </Center>
    )
  }

  return (
    <div style={{ paddingTop: '6rem' }}>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <Modal
        opened={opened}
        onClose={() => {
          setEditingProduct(undefined)
          close()
        }}
      >
        <EditProductForm
          product={editingProduct}
          getProducts={getProducts}
          onClose={close}
          setProduct={setEditingProduct}
        />
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
          getProducts={getProducts}
        />
      </Container>
    </div>
  )
}
