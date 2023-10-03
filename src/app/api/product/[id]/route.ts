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
  await prisma.product.update({
    where: {
      id: params.id,
    },
    data: body,
  })
  return new NextResponse()
}
