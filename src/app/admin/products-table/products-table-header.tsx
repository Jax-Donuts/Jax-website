import { Center, Group, Text, UnstyledButton, rem } from '@mantine/core'
import { Product } from '@prisma/client'
import { ChevronDown, ChevronUp, Selector } from 'tabler-icons-react'
import { useStyles } from './products-table.styles'

interface Props {
  sortBy: keyof Product | null
  setSorting: (field: keyof Product) => void
  reverseSortDirection: boolean
}

interface ThProps {
  children: React.ReactNode
  reversed?: boolean
  sorted?: boolean
  onSort?(): void
  style?: React.CSSProperties
}

function Th({ children, reversed, sorted, onSort, style }: ThProps) {
  const { classes } = useStyles()
  const Icon = sorted ? (reversed ? ChevronUp : ChevronDown) : Selector
  return (
    <th className={classes.th} style={style}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          {onSort ? (
            <Center className={classes.icon}>
              <Icon size="0.9rem" />
            </Center>
          ) : null}
        </Group>
      </UnstyledButton>
    </th>
  )
}

export function ProductsTableHeader({ reverseSortDirection, sortBy, setSorting }: Props) {
  return (
    <thead>
      <tr>
        <Th style={{ width: rem(40) }}>{''}</Th>
        <Th sorted={sortBy === 'name'} reversed={reverseSortDirection} onSort={() => setSorting('name')}>
          Item Name
        </Th>
        <Th sorted={sortBy === 'price'} reversed={reverseSortDirection} onSort={() => setSorting('price')}>
          Price
        </Th>
        <Th sorted={sortBy === 'type'} reversed={reverseSortDirection} onSort={() => setSorting('type')}>
          Type
        </Th>
        <Th sorted={sortBy === 'families'}>Families</Th>
        <Th style={{ width: rem(40) }}>{''}</Th>
      </tr>
    </thead>
  )
}
