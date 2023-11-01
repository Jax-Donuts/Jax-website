'use client'

import { HeaderButton } from '@/components'
import { Container, Grid, Group, Title } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { MenuHeader } from '../menu-header/menu-header'

export function TopHeader() {
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
              <Title size="3.5rem" align="left" color="red" fw={700}>
                Jax Donut
              </Title>
            </Group>
          </Link>
        </Grid.Col>

        <Grid.Col span="auto">
          <Group position="right" spacing="xl">
            <Link href="/">
              <HeaderButton text="Home"></HeaderButton>
            </Link>
            <MenuHeader />
            <Link href="/location" passHref>
              <HeaderButton text="Location"></HeaderButton>
            </Link>
            <Link href="/contact" passHref>
              <HeaderButton text="Contact Us"></HeaderButton>
            </Link>
            <Link href="/about">
              <HeaderButton text="About"></HeaderButton>
            </Link>
            <Link href="/admin">
              <HeaderButton text="Admin"></HeaderButton>
            </Link>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
