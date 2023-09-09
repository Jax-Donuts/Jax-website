'use client'

import { PageHeader } from '@/components/page-header/page-header'
import { Product } from '@/shared/product-types'
import { Container, Text } from '@mantine/core'
import { useMemo } from 'react'
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
      <PageHeader title={productGroup.toUpperCase()} />
      <>
        {productsOfFamily.map((product) => {
          return <Text key={product.name}>{product.displayName.toUpperCase()}</Text>
        })}
      </>
    </Container>
  )
}
