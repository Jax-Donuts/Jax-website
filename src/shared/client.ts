import axios, { AxiosRequestConfig } from 'axios'

import { Routes } from './routes'

export async function req<T extends keyof Routes>(
  url: T,
  requestConfig: AxiosRequestConfig,
): Promise<Routes[T]['response']> {
  const response = await axios<Promise<Routes[T]['response']>>({ ...{ requestConfig }, url })
  return response.data
}
