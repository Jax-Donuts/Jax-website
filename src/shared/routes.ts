import { Product } from '@prisma/client'
import { NextResponse } from 'next/server'

export interface Routes {
  '/api': { response: number }
  '/api/products': { response: Product[] }
}

export type Response<T extends keyof Routes> = NextResponse<Routes[T]['response']>
