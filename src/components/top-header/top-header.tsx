'use client'

import { GeneralButton, HeaderButton } from '@/components'
import { MainColors } from '@/shared/constants'
import { Avatar, Container, Grid, Group, Title } from '@mantine/core'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuHeader } from '../menu-header/menu-header'

export function TopHeader() {
  const { data: session } = useSession()
  const pathname = usePathname()
  console.log(pathname)

  return (
    <Container
      size="fluid"
      px="10rem"
      py={30}
      pb="xl"
      pt={10}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: 'white',
        borderBottom: '1px solid lightgrey',
      }}
    >
      <Grid align="center">
        <Grid.Col span="content">
          <Link href="/">
            <Group spacing="xs">
              <Image src="/logo.png" alt="logo" width={80} height={80} />
              <Title size="3.5rem" align="left" color={MainColors.RedStatic} fw={700}>
                Jax Donut
              </Title>
            </Group>
          </Link>
        </Grid.Col>

        <Grid.Col span="auto">
          <Group position="right" spacing="xl">
            <Link href="/">
              <HeaderButton>Home</HeaderButton>
            </Link>
            <MenuHeader />
            <Link href="/location" passHref>
              <HeaderButton>Location</HeaderButton>
            </Link>
            <Link href="/contact" passHref>
              <HeaderButton>Contact Us</HeaderButton>
            </Link>
            <Link href="/about">
              <HeaderButton>About</HeaderButton>
            </Link>
            {session?.user.isAdmin ? (
              <Link href="/admin">
                <HeaderButton>Admin</HeaderButton>
              </Link>
            ) : null}

            {pathname !== '/auth/signin' ? (
              session?.user ? (
                <>
                  <GeneralButton
                    onClick={() => {
                      signOut()
                    }}
                  >
                    Sign Out
                  </GeneralButton>
                </>
              ) : (
                <GeneralButton onClick={() => signIn()}>Sign In</GeneralButton>
              )
            ) : null}
            {session?.user ? (
              <Avatar color={MainColors.RedStatic} src={session.user.image} size={40} radius={40} />
            ) : null}
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
