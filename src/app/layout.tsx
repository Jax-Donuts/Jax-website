import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RootStyleRegistry from './emotion'

import { TopHeader } from '@/components'
import Footer from '@/components/footer/footer'

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
      <body className={inter.className} style={{ minHeight: '100vh', position: 'relative', paddingBottom: 200 }}>
        <RootStyleRegistry>
          <TopHeader />
          <div style={{ minHeight: '100%', paddingTop: 40 }}>{children}</div>
          <Footer />
        </RootStyleRegistry>
      </body>
    </html>
  )
}
