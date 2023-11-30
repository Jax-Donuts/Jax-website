import { prisma } from '@/db'
import { ProductAttr } from '@/shared/product-types'
import { Body, Params } from '@/shared/routes'
import { NextRequest, NextResponse } from 'next/server'
import { authGuard } from '../../auth-guard'

export async function DELETE(req: NextRequest, { params }: { params: Params<'DELETE /product/[id]'> }) {
  const res = await authGuard(req)
  if (res) return res

  await prisma.product.delete({
    where: {
      id: params.id,
    },
  })
  return new NextResponse()
}

export async function PUT(req: NextRequest, { params }: { params: Params<'PUT /product/[id]'>; body: ProductAttr }) {
  const body: Body<'PUT /product/[id]'> = await req.json()
  const res = await authGuard(req)
  if (res) return res

  await prisma.product.update({
    where: {
      id: params.id,
    },
    data: body,
  })
  return new NextResponse()
}
