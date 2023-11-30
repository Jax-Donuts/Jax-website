import axios from 'axios'

import { Routes } from './routes'

export async function req<T extends keyof Routes, B extends Routes[T]['body'], P extends Routes[T]['params']>(
  url: T,
  { data, params }: { data?: B; params?: P },
): Promise<Routes[T]['response']> {
  const regex = /^(GET|POST|PUT|HEAD|DELETE|PATCH|OPTIONS|CONNECT|TRACE) (.*)/g
  const matches = regex.exec(url)
  const method = matches?.[1]?.toLowerCase()
  let path = matches?.[2]
  if (!method) throw Error(`Invalid HTTP Method supplied in URL Route. ${method}`)
  if (!path) throw Error(`Invalid path supplied, ${path}`)

  for (const [key, value] of Object.entries(params ?? [])) {
    path = path?.replace(new RegExp(`\\[${key}\\]`), value)
  }

  const response = await axios({ method, data, url: `/api${path}` })
  if (response.status !== 200) throw Error(response.data)
  return response.data as Promise<Routes[T]['response']>
}
