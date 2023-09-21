import { prisma } from '@/db'
import { Body, Response } from '@/shared/routes'
import { NextResponse } from 'next/server'
import { productToDto } from '../dto.utility'

export async function POST(request: Request): Promise<Response<'POST /product'>> {
  const body: Body<'POST /product'> = await request.json()
  const product = await prisma.product.create({
    data: body,
  })
  return NextResponse.json(productToDto(product))
}
