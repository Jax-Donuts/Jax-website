import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RootStyleRegistry from './emotion'

import { TopHeader } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jax Donut',
  description: 'Jax Donut website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <RootStyleRegistry>
          <TopHeader></TopHeader>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  )
}
