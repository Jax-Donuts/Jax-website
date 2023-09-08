'use client'

import { PageHeader } from '@/components/page-header/page-header'
import { Button, Group, Modal } from '@mantine/core'
import EditProductForm from './edit-product-form'

import { useDisclosure } from '@mantine/hooks'

export default function Admin() {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <>
      <Modal opened={opened} onClose={close}>
        <EditProductForm />
      </Modal>
      <PageHeader title="admin" />
      <Group position="center">
        <Button tt="uppercase" onClick={open}>
          Edit/Create Product
        </Button>
      </Group>
    </>
  )
}
