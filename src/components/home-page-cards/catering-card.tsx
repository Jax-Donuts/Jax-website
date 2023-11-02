'use client'

import { GeneralButton } from '@/components'
import { MainColors } from '@/shared/constants'
import { Box, Card, Group, Space, Title, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import { ShoppingCart } from 'tabler-icons-react'

export default function CateringCard() {
  const theme = useMantineTheme()

  return (
    <Card w="50%" shadow="sm" padding="lg" radius="xl" p={0} bg={MainColors.PinkWhiteBG} h="40vh">
      <Group noWrap align="center" h="100%" grow>
        <ShoppingCart color={MainColors.RedStatic} size="10rem" />
        <Box miw="50%" p="5%">
          <Title h="100%" sx={{ textTransform: 'uppercase' }}>
            Catering
          </Title>
          <Space h="md" />
          <Link href="/contact" passHref>
            <GeneralButton text="Order Catering"></GeneralButton>
          </Link>
        </Box>
      </Group>
    </Card>
  )
}
