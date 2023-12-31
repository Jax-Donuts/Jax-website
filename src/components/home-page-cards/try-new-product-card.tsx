'use client'

import { GeneralButton } from '@/components'
import { MainColors } from '@/shared/constants'
import { Box, Card, Group, Space, Title } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

export default function TryNewProductCard() {
  return (
    <Card shadow="sm" padding="lg" radius="xl" p={0} bg={MainColors.PinkWhiteBG} h="40vh">
      <Group noWrap align="center" h="100%" grow>
        <Box miw="50%" h="100%" p="5%" style={{ position: 'relative', justifyContent: 'left' }}>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="generic-image"
            layout="fill"
          ></Image>
        </Box>

        <Box miw="50%" p="5%">
          <Title h="100%" sx={{ textTransform: 'uppercase' }}>
            try a refreshing
            <br /> thai tea!
          </Title>
          <Space h="md" />
          <Link href="/menu/productType/drinks" passHref>
            <GeneralButton>Drinks</GeneralButton>
          </Link>
        </Box>
      </Group>
    </Card>
  )
}
