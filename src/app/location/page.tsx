'use client'

import { LocationCard } from '@/components'
import { PageHeader } from '@/components/page-header/page-header'

export default function Location() {
  return (
    <>
      <PageHeader title="our shop" />
      <LocationCard hideTitle />
    </>
  )
}
