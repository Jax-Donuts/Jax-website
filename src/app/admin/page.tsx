'use client'

import { PageHeader } from '@/components/page-header/page-header'
import EditProductForm from './edit-product-form'

export default function Admin() {
  return (
    <>
      <PageHeader title="admin" />
      <EditProductForm />
    </>
  )
}
