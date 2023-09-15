import { prisma } from '@/db' //client to talk to db
import { Body, Response } from '@/shared/routes' //
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<Response<'/api/product'>> {
  const body: Body<'/api/product'> = await request.json()
  console.log(body)
  console.log('eat ass')
  const product = await prisma.product.create({
    data: {
      name: body.name,
      displayName: body.displayName,
      available: body.available,
      price: body.price,
      type: body.type,
      families: body.families,
      description: body.description,
    },
  })
  return NextResponse.json(product)
}
