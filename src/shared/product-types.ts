export const productTypes = {
  donuts: ['raised', 'filled', 'cake'],
  baked: ['bagels', 'croissant', 'muffins', 'bear claws'],
  drinks: ['coffee', 'tea', 'juice', 'soda', 'energy'],
} as const

export interface ProductDto {
  id: string
  name: string
  displayName: string
  available: boolean
  price: number
  type: string
  families: string[]
  description: string
}

export interface ProductAttr {
  name: string
  displayName: string
  available: boolean
  price: number
  type: string
  families: string[]
  description: string
}
