'use client'

import { Title, Text, Container } from '@mantine/core'
import { useMemo } from 'react'
import { Product } from '@/shared/product-types'
import { useSearchParams } from 'next/navigation'
import { useMenu } from './use-menu'

type MenuRouteParams = {
  productGroupType: 'productType' | 'productFamily'
  productGroup: Product['families'][number] | Product['type']
}

export default function Menu({ params }: { params: MenuRouteParams }) {
  const productGroupType = params.productGroupType
  const productGroup = params.productGroup

  const { products } = useMenu()

  const productsOfFamily = useMemo(
    () =>
      productGroupType === 'productFamily'
        ? products.filter((product) => product.families.some((family) => family === productGroup))
        : products.filter((product) => product.type === productGroup),
    [productGroup, productGroupType, products],
  )

  console.log(productGroupType, productGroup)

  if (!productGroupType || !productGroup) return null

  return (
    <Container>
      <Title order={2} weight={200} align="center" color="red" fw={700} size={80}>
        {productGroup.toUpperCase()}
      </Title>
      <>
        {productsOfFamily.map((product) => {
          return <Text key={product.name}>{product.displayName.toUpperCase()}</Text>
        })}
      </>
    </Container>
  )
}
