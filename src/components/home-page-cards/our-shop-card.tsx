'use client'

import { GeneralButton, LocationCard } from '@/components'
import { MainColors } from '@/shared/constants'
import { Box, Card, Container, Group, Space, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import { Location as LocationIcon } from 'tabler-icons-react'

export default function OurShopCard() {
  const theme = useMantineTheme()
  return (
    <Card shadow="sm" padding="lg" radius="xl" p={0} bg={MainColors.PinkWhiteBG} h="40vh">
      <Group noWrap align="center" h="100%" grow>
        <LocationIcon color={MainColors.RedStatic} size="10rem" />
        <Box miw="50%" p="5%">
          <LocationCard hideMap />
          <Space h="md" />
          <Container ta="center">
            <Link href="/location" passHref>
              <GeneralButton>Find</GeneralButton>
            </Link>
          </Container>
        </Box>
      </Group>
    </Card>
  )
}
