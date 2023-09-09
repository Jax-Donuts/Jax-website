'use client'

import { Container, Group, Text } from '@mantine/core'

interface Props {
  title: string
}
export function PageHeader({ title }: Props) {
  return (
    <Container fluid px="10rem">
      <Group noWrap align="center" h="100%" grow spacing="xs">
        <Text size="3rem" p="2rem" align="center" weight={700} tt="uppercase" color="red">
          {title}
        </Text>
      </Group>
    </Container>
  )
}
