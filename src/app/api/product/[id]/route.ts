import { prisma } from '@/db'
import { Params } from '@/shared/routes'
import { NextResponse } from 'next/server'

export async function DELETE(_: Request, { params }: { params: Params<'DELETE /product/[id]'> }) {
  await prisma.product.delete({
    where: {
      id: params.id,
    },
  })
  return new NextResponse()
}
