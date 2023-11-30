'use client'

import { Text } from '@mantine/core'

interface Props {
  title: string
}
export function PageHeader({ title }: Props) {
  return (
    <Text size="3rem" p="2rem" align="center" weight={700} tt="uppercase" color="red">
      {title}
    </Text>
  )
}
