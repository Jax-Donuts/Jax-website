import { ProductDto } from '@/shared/product-types'
import { Product } from '@prisma/client'

export function productToDto(product: Product): ProductDto {
  return {
    ...product,
    price: product.price.toNumber(),
  }
}
