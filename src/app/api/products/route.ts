import { prisma } from '@/db'
import { Response } from '@/shared/routes'
import { NextResponse } from 'next/server'
import { productToDto } from '../dto.utility'

export async function GET(): Promise<Response<'GET /products'>> {
  const products = await prisma.product.findMany()
  return NextResponse.json(products.map((product) => productToDto(product)))
}
