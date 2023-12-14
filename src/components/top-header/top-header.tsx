'use client'

import { GeneralButton, HeaderButton } from '@/components'
import { MainColors } from '@/shared/constants'
import { Avatar, Burger, Center, Container, Grid, Group, Popover, SimpleGrid, Text, Title } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MenuHeader } from '../menu-header/menu-header'
import { MenuHeaderDropdown } from '../menu-header/menu-header-dropdown'
import { NavbarSimpleColored } from '../navbar/navbar'
import { useStyles } from './top-header.styles'

export function TopHeader() {
  const { classes } = useStyles()
  const { data: session } = useSession()
  const pathname = usePathname()
  const [opened, setOpened] = useState(false)
  const [burgerMenuOpened, { toggle: toggleBurgerMenu, close: closeBurger }] = useDisclosure(false)
  const matches = useMediaQuery('(width <= 1000px)')
  useEffect(() => {
    closeBurger()
  }, [matches, closeBurger])

  return (
    <div style={{ position: 'fixed', zIndex: 10, top: 0, width: '100%' }}>
      <NavbarSimpleColored width={burgerMenuOpened ? 300 : 0} toggle={toggleBurgerMenu} />
      <Container size="fluid" px="15%" py={5} className={classes.loginContainer}>
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
          <Container size="fluid" px="15%" py={20} pt={10} className={classes.headerContainer}>
            <Grid align="center" grow>
              <Grid.Col span="content">
                <Link href="/">
                  <SimpleGrid
                    cols={3}
                    breakpoints={[{ minWidth: 1000, cols: 1, spacing: 'md' }]}
                    className={classes.simpleGrid}
                  >
                    <Burger
                      color={MainColors.RedStatic}
                      opened={opened}
                      onClick={toggleBurgerMenu}
                      className={classes.burger}
                    />
                    <Center>
                      <Group spacing="xs" align="center" noWrap>
                        <Image
                          src="/logo.png"
                          alt="logo"
                          width={60}
                          height={60}
                          sizes="100vw"
                          className={classes.headerLogo}
                        />
                        <Title
                          size="2.5rem"
                          align="left"
                          color={MainColors.RedStatic}
                          fw={700}
                          className={classes.headerTitle}
                        >
                          Jax Donut
                        </Title>
                      </Group>
                    </Center>
                  </SimpleGrid>
                </Link>
              </Grid.Col>

              <Grid.Col span={8} miw={700} className={classes.menuColumn}>
                <SimpleGrid pr={0} cols={session?.user.isAdmin ? 6 : 5} spacing={0}>
                  <Link href="/">
                    <HeaderButton>Home</HeaderButton>
                  </Link>
                  <MenuHeader setOpened={setOpened} />
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
