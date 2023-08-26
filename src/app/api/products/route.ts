import { prisma } from '@/db'
import { Response } from '@/shared/routes'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: {} }): Promise<Response<'/api/products'>> {
  const products = await prisma.product.findMany()
  return NextResponse.json(products)
}
