export const productTypes = {
  donuts: ['raised', 'filled', 'cake'],
  baked: ['bagels', 'croissant', 'muffins', 'bear claws'],
  drinks: ['coffee', 'tea', 'juice', 'soda', 'energy'],
} as const

export interface Product {
  name: string
  displayName: string
  price: number
  type: keyof typeof productTypes
  families: (typeof productTypes)[keyof typeof productTypes][number][]
  description: string
}

/** TODO: This product data is to be stored in a database where each record refers to each product */
export const products: Product[] = [
  {
    name: 'chocolate glaze',
    displayName: 'chocolate',
    price: 1.69,
    type: 'donuts',
    families: ['raised'],
    description:
      'Indulge your sweet cravings with our delectable Chocolate Donut! This delightful treat boasts a fluffy and moist donut base, expertly crafted to perfection. Its rich cocoa-infused dough offers a heavenly burst of chocolate flavor in every bite. Topped with a luscious glaze that adds a glossy finish, this irresistible delight is sure to captivate your taste buds. Whether you savor it with a cup of coffee or as a standalone delight, our Chocolate Donut is the ultimate treat for all dessert enthusiasts. Experience pure bliss in every mouthwatering moment!',
  },
]
