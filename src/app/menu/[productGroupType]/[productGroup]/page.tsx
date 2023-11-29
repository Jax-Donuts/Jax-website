'use client'

import { PageHeader } from '@/components/page-header/page-header'
import { Container, Text } from '@mantine/core'
import { useMemo } from 'react'
import { useMenu } from './use-menu'

type MenuRouteParams = {
  productGroupType: 'productType' | 'productFamily'
  productGroup: string
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
    <Container px="15%" pt="6rem">
      <PageHeader title={productGroup.toUpperCase()} />
      <>
        {productsOfFamily.map((product) => {
          return <Text key={product.name}>{product.displayName.toUpperCase()}</Text>
        })}
      </>
    </Container>
  )
}
