'use client'

import { Box, Button, Card, Group, Space, Title, useMantineTheme } from '@mantine/core'
import { ShoppingCart } from 'tabler-icons-react'

import Link from 'next/link'

export default function CateringCard() {
  const theme = useMantineTheme()

  return (
    <Card w="50%" shadow="sm" padding="lg" radius="xl" p={0} bg="#fff2f2" h="40vh">
      <Group noWrap align="center" h="100%" grow>
        <ShoppingCart color={theme.colors['red'][6]} size="10rem" />
        <Box miw="50%" p="5%">
          <Title h="100%" sx={{ textTransform: 'uppercase' }}>
            Catering
          </Title>
          <Space h="md" />
          <Link href="/about" passHref>
            <Button color="red" radius={30} size="lg">
              Order Catering
            </Button>
          </Link>
        </Box>
      </Group>
    </Card>
  )
}
