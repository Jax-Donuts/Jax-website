import { prisma } from '@/db'
import { ApiResponse, Body } from '@/shared/routes'
import { NextRequest, NextResponse } from 'next/server'
import { authGuard } from '../auth-guard'
import { productToDto } from '../dto.utility'

export async function POST(req: NextRequest): Promise<ApiResponse<'POST /product'>> {
  const res = await authGuard(req)
  if (res) return res

  const body: Body<'POST /product'> = await req.json()
  const product = await prisma.product.create({
    data: body,
  })
  return NextResponse.json(productToDto(product))
}
