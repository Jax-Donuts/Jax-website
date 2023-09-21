import axios from 'axios'

import { Routes } from './routes'

export async function req<T extends keyof Routes, G extends Routes[T]['body']>(
  url: T,
  { data }: { data?: G },
): Promise<Routes[T]['response']> {
  const regex = /^(GET|POST|PUT|HEAD|DELETE|PATCH|OPTIONS|CONNECT|TRACE) (.*)/g
  const matches = regex.exec(url)
  const method = matches?.[1]?.toLowerCase()
  const path = matches?.[2]
  if (!method) throw Error(`Invalid HTTP Method supplied in URL Route. ${method}`)
  if (!path) throw Error(`Invalid path supplied, ${path}`)

  const response = await axios<Promise<Routes[T]['response']>>({ method, data, url: `/api${path}` })
  return response.data
}
