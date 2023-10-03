import { prisma } from '@/db'
import { ProductAttr } from '@/shared/product-types'
import { Body, Params } from '@/shared/routes'
import { NextResponse } from 'next/server'

export async function DELETE(_: Request, { params }: { params: Params<'DELETE /product/[id]'> }) {
  await prisma.product.delete({
    where: {
      id: params.id,
    },
  })
  return new NextResponse()
}

export async function PUT(request: Request, { params }: { params: Params<'PUT /product/[id]'>; body: ProductAttr }) {
  const body: Body<'PUT /product/[id]'> = await request.json()
  console.log('Body: ', body)
  const { name, displayName, available, price, type, families, description } = body
  await prisma.product.update({
    where: {
      id: params.id,
    },
    data: {
      name: name !== undefined ? { set: name } : undefined,
      displayName: displayName !== undefined ? { set: displayName } : undefined,
      available: available !== undefined ? { set: available } : undefined,
      price: price !== undefined ? { set: price } : undefined,
      type: type !== undefined ? { set: type } : undefined,
      families: families !== undefined ? { set: families } : undefined,
      description: description !== undefined ? { set: description } : undefined,
    },
  })
  return new NextResponse()
}
