'use client'

import { CacheProvider } from '@emotion/react'
import { MantineProvider, useEmotionCache } from '@mantine/core'
import { Archivo } from 'next/font/google'
import { useServerInsertedHTML } from 'next/navigation'

export const archivo = Archivo({
  weight: '800',
  subsets: ['latin'],
})

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache()
  cache.compat = true

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: () => ({
            'Button::before, Button::after': {
              fontWeight: 700,
            },
            'a:any-link': {
              textDecoration: 'none',
              color: 'inherit',
            },
          }),
          components: {
            Button: {
              defaultProps: {
                styles: {
                  root: {
                    color: 'black',
                    '&:hover': {
                      color: '#FF0000',
                      backgroundColor: '#FFF5F5',
                    },
                  },
                },
                variant: 'subtle',
                size: 'md',
              },
            },
          },
          fontFamily: `${archivo.style.fontFamily},Arial,Helvetica,sans-serif`,
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  )
}
