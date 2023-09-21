import { NextResponse } from 'next/server'
import { ProductAttr, ProductDto } from './product-types'

export interface JaxRequest<RESPONSE, BODY = undefined> {
  response: RESPONSE
  body: BODY
}

export interface Routes {
  'GET /products': JaxRequest<ProductDto[]>
  'POST /product': JaxRequest<ProductDto, ProductAttr>
}

export type Response<T extends keyof Routes> = NextResponse<Routes[T]['response']>
export type Body<T extends keyof Routes> = Routes[T]['body']
