export const productTypes = {
  donuts: ['raised', 'filled', 'cake'],
  baked: ['bagels', 'croissant', 'muffins', 'bear claws'],
  drinks: ['coffee', 'tea', 'juice', 'soda', 'energy'],
} as const

export interface ProductDto {
  name: string
  displayName: string
  price: number
  type: keyof typeof productTypes
  families: (typeof productTypes)[keyof typeof productTypes][number][]
  description: string
}
