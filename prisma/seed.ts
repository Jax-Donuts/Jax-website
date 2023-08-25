import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const data = [
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

  for (const donut of data) {
    await prisma.product.upsert({
      where: { name: donut.name },
      update: {},
      create: donut,
    })
  }
  console.log('Donuts added', data.length)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
