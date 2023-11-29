'use client'

import { LocationCard } from '@/components'
import { PageHeader } from '@/components/page-header/page-header'
import { Container } from '@mantine/core'

export default function Location() {
  return (
    <Container px="15%" pt="6rem">
      <PageHeader title="our shop" />
      <LocationCard hideTitle />
    </Container>
  )
}
