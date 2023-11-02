'use client'

import { MainColors } from '@/shared/constants'
import { Card, Group, Stack, Title } from '@mantine/core'
import Image from 'next/image'

export default function TitleCard() {
  return (
    <Card shadow="sm" padding="lg" radius="xl" p={0}>
      <Group noWrap align="center" h="100%" grow spacing="xs">
        <Image src="/products/donuts/raised/sugar.jpeg" width={500} height={500} alt="sugar-donut" />
        <Stack align="center">
          <Image src="/logo.png" alt="logo" width={200} height={200} style={{ justifyContent: 'center' }} />
          <Title align="left" color={MainColors.RedStatic} fw={700} size={80}>
            Jax Donut
          </Title>
        </Stack>
      </Group>
    </Card>
  )
}
