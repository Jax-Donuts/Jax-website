'use-client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RootStyleRegistry from './emotion'

import { TopHeader } from '@/components'
import Footer from '@/components/footer/footer'
import { Session } from 'next-auth'
import { NextAuthProvider } from './auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jax Donut',
  description: 'Jax Donut website',
}

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode
  session?: Session | null | undefined
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className} style={{ minHeight: '100vh', position: 'relative', paddingBottom: 200 }}>
        <RootStyleRegistry>
          <NextAuthProvider session={session}>
            <TopHeader />
            <div style={{ minHeight: '100%', paddingTop: 40 }}>{children}</div>
            <Footer />
          </NextAuthProvider>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
