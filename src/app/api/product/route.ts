import { prisma } from '@/db'
import { Body, Response } from '@/shared/routes'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<Response<'/api/product'>> {
  const body: Body<'/api/product'> = await request.json()
  const product = await prisma.product.create({
    data: body,
  })
  return NextResponse.json(product)
}
