'use client'

import { Button, Container, Grid, Group, Text, Title } from '@mantine/core'
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
              <Button variant="subtle" size="md" tt="uppercase">
                <Text>home</Text>
              </Button>
            </Link>
            <MenuHeader />
            <Link href="/location" passHref>
              <Button variant="subtle" size="md" tt="uppercase">
                location
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="subtle" size="md" tt="uppercase">
                contact us
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="subtle" size="md" tt="uppercase">
                about
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="subtle" size="md" tt="uppercase">
                admin
              </Button>
            </Link>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
