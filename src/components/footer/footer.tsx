'use client'

import { ActionIcon, Container, Group, Stack, Text, Title, createStyles, rem } from '@mantine/core'
import Link from 'next/link'
import { BrandInstagram, BrandTwitter, BrandYoutube } from 'tabler-icons-react'
// import { MantineLogo } from '@mantine/ds';
import { archivo } from '@/app/emotion'
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    position: 'absolute',
    bottom: 0,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}))

export default function Footer() {
  const links = [
    { link: '/contact', label: 'contact' },
    { link: '/location', label: 'location' },
    { link: '/menu/productType/donut', label: 'menu' },
    { link: '/about', label: 'about' },
  ]
  const { classes } = useStyles()
  const items = links.map((link) => (
    <Link key={link.label} href={link.link} style={{ fontFamily: archivo.style.fontFamily }}>
      <Text c="red.8">{link.label}</Text>
    </Link>
  ))

  return (
    <Container size="fluid" px="10rem" pb="xl" pt={10} w="100%" className={classes.footer}>
      <div className={classes.inner}>
        <Link href="/">
          <Stack align="center" spacing={5}>
            <Image src="/logo.png" alt="logo" width={48} height={48} />
            <Title size="1.5rem" align="left" color="red.8" ta="center">
              Jax Donut
            </Title>
          </Stack>
        </Link>
        <Group spacing={100} className={classes.links}>
          {items}
        </Group>
        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BrandTwitter size="1.05rem" />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BrandYoutube size="1.05rem" />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BrandInstagram size="1.05rem" />
          </ActionIcon>
        </Group>
      </div>
    </Container>
  )
}
