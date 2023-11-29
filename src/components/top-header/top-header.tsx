'use client'

import { GeneralButton, HeaderButton } from '@/components'
import { MainColors } from '@/shared/constants'
import { Avatar, Container, Grid, Group, Popover, SimpleGrid, Text, Title } from '@mantine/core'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MenuHeader } from '../menu-header/menu-header'
import { MenuHeaderDropdown } from '../menu-header/menu-header-dropdown'

export function TopHeader() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [opened, setOpened] = useState(false)

  return (
    <div style={{ position: 'fixed', zIndex: 10, top: 0, width: '100%' }}>
      <Container
        size="fluid"
        px="20%"
        py={5}
        style={{
          top: 0,
          zIndex: 1,
          backgroundColor: 'white',
          borderBottom: '1px solid lightgrey',
        }}
      >
        <Group style={{ justifyContent: 'right' }}>
          {pathname !== '/auth/signin' ? (
            session?.user ? (
              <>
                <GeneralButton
                  onClick={() => {
                    signOut()
                  }}
                  size="sm"
                >
                  <Text style={{ fontSize: 12 }}>Sign Out</Text>
                </GeneralButton>
              </>
            ) : (
              <GeneralButton onClick={() => signIn()} size="sm">
                <Text style={{ fontSize: 12 }}>Sign In</Text>
              </GeneralButton>
            )
          ) : null}
          {session?.user ? (
            <Avatar color={MainColors.RedStatic} src={session.user.image} size={40} radius={40}>
              G
            </Avatar>
          ) : null}
        </Group>
      </Container>
      <Popover
        opened={opened}
        onChange={setOpened}
        width="100%"
        shadow="md"
        styles={{ dropdown: { top: '0 !important', position: 'relative' } }}
      >
        <Popover.Target>
          <Container
            size="fluid"
            px="20%"
            py={20}
            pt={10}
            style={{
              top: 0,
              zIndex: 1,
              backgroundColor: 'white',
              borderBottom: '1px solid lightgrey',
            }}
          >
            <Grid align="center" grow>
              <Grid.Col span="content">
                <Link href="/">
                  <Group spacing="xs">
                    <Image src="/logo.png" alt="logo" width={60} height={60} />
                    <Title size="2.5rem" align="left" color={MainColors.RedStatic} fw={700}>
                      Jax Donut
                    </Title>
                  </Group>
                </Link>
              </Grid.Col>

              <Grid.Col span={8} miw={700}>
                <SimpleGrid pr={0} cols={6} spacing={0}>
                  <Link href="/">
                    <HeaderButton>
                      <Text size="100%">Home</Text>
                    </HeaderButton>
                  </Link>
                  <MenuHeader setOpened={setOpened} />
                  <Link href="/location" passHref>
                    <HeaderButton>Location</HeaderButton>
                  </Link>
                  <Link href="/contact" passHref>
                    <HeaderButton>
                      <Text size="10">Contact Us</Text>
                    </HeaderButton>
                  </Link>
                  <Link href="/about">
                    <HeaderButton>About</HeaderButton>
                  </Link>
                  {session?.user.isAdmin ? (
                    <Link href="/admin">
                      <HeaderButton>Admin</HeaderButton>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </SimpleGrid>
              </Grid.Col>
            </Grid>
          </Container>
        </Popover.Target>
        <Popover.Dropdown>
          <MenuHeaderDropdown setOpened={setOpened} />
        </Popover.Dropdown>
      </Popover>
    </div>
  )
}
