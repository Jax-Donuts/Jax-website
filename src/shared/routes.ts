import { Product } from '@prisma/client'
import { NextResponse } from 'next/server'

export interface JaxRequest<RESPONSE, BODY = undefined> {
  response: RESPONSE
  body: BODY
}

export interface Routes {
  '/api': JaxRequest<number>
  '/api/products': JaxRequest<Product[]>
  '/api/product': JaxRequest<
    Product,
    {
      name: string
      displayName: string
      available: boolean
      price: number
      type: string
      families: string[]
      description: string
    }
  >
}

export type Response<T extends keyof Routes> = NextResponse<Routes[T]['response']>
export type Body<T extends keyof Routes> = Routes[T]['body']
