'use client'

import { Box, Button, Card, Container, Group, Space, useMantineTheme } from '@mantine/core'
import { Location as LocationIcon } from 'tabler-icons-react'

import { LocationCard } from '@/components'
import Link from 'next/link'

export default function OurShopCard() {
  const theme = useMantineTheme()
  return (
    <Card shadow="sm" padding="lg" radius="xl" p={0} bg="#fff2f2" h="40vh">
      <Group noWrap align="center" h="100%" grow>
        <LocationIcon color={theme.colors['red'][6]} size="10rem" />
        <Box miw="50%" p="5%">
          <LocationCard hideMap />
          <Space h="md" />
          <Container ta="center">
            <Link href="/location" passHref>
              <Button color="red" radius={30} size="lg">
                Find
              </Button>
            </Link>
          </Container>
        </Box>
      </Group>
    </Card>
  )
}
