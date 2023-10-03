import { NextResponse } from 'next/server'
import { ProductAttr, ProductDto } from './product-types'

export interface JaxRequest<RESPONSE, BODY = undefined, PARAMS = undefined> {
  response: RESPONSE
  body: BODY
  params: PARAMS
}

export interface Routes {
  'GET /products': JaxRequest<ProductDto[]>
  'POST /product': JaxRequest<ProductDto, ProductAttr>
  'DELETE /product/[id]': JaxRequest<void, undefined, { id: string }>
  'PUT /product/[id]': JaxRequest<ProductDto, ProductAttr, { id: string }>
}

export type Response<T extends keyof Routes> = NextResponse<Routes[T]['response']>
export type Body<T extends keyof Routes> = Routes[T]['body']
export type Params<T extends keyof Routes> = Routes[T]['params']
