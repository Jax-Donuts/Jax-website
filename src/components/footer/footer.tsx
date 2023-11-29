'use client'

import { archivo } from '@/app/emotion'
import { MainColors } from '@/shared/constants'
import { Container, Group, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useStyles } from './footer.styles'

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
      <Text
        color="black"
        tt="uppercase"
        sx={{
          '&:hover': {
            color: MainColors.RedHover,
          },
        }}
      >
        {link.label}
      </Text>
    </Link>
  ))

  return (
    <Container size="fluid" px="15%" pb="xl" w="100%" className={classes.footer}>
      <div className={classes.inner}>
        <Link href="/">
          <Stack align="center" spacing={5}>
            <Image src="/logo.png" alt="logo" width={48} height={48} />
            <Title size="1.5rem" align="left" color={MainColors.RedStatic} ta="center">
              Jax Donut
            </Title>
          </Stack>
        </Link>
        <Group spacing={100} className={classes.links}>
          {items}
        </Group>
        <Group spacing="xs" position="right" noWrap></Group>
      </div>
    </Container>
  )
}
