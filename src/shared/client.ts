import axios from 'axios'

import { Routes } from './routes'

export async function req<T extends keyof Routes, G extends Routes[T]['body']>(
  url: T,
  { method, data }: { method: string; data: G },
): Promise<Routes[T]['response']> {
  const response = await axios<Promise<Routes[T]['response']>>({ method, data, url })
  return response.data
}
