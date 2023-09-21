import { prisma } from '@/db'
import { NextResponse } from 'next/server'

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.product.delete({
    where: {
      id: params.id,
    },
  })
  return new NextResponse()
}
