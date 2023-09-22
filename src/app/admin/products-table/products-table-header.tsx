import { ProductDto } from '@/shared/product-types'
import { Center, Group, Text, UnstyledButton, rem } from '@mantine/core'
import { ChevronDown, ChevronUp, Selector } from 'tabler-icons-react'
import { useStyles } from './products-table.styles'

interface Props {
  reverseSortDirection: boolean
  sortByKey: keyof ProductDto | null
  applySortingToggles: (field: keyof ProductDto) => void
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

export function ProductsTableHeader({ reverseSortDirection, sortByKey, applySortingToggles }: Props) {
  return (
    <thead>
      <tr>
        <Th style={{ width: rem(40) }}>{''}</Th>
        <Th sorted={sortByKey === 'name'} reversed={reverseSortDirection} onSort={() => applySortingToggles('name')}>
          Item Name
        </Th>
        <Th sorted={sortByKey === 'price'} reversed={reverseSortDirection} onSort={() => applySortingToggles('price')}>
          Price
        </Th>
        <Th sorted={sortByKey === 'type'} reversed={reverseSortDirection} onSort={() => applySortingToggles('type')}>
          Type
        </Th>
        <Th sorted={sortByKey === 'families'}>Families</Th>
        <Th style={{ width: rem(40) }}>{''}</Th>
        <Th style={{ width: rem(40) }}>{''}</Th>
      </tr>
    </thead>
  )
}
