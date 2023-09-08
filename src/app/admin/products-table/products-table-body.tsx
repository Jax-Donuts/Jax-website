import { Checkbox, Text, UnstyledButton } from '@mantine/core'
import { Product } from '@prisma/client'
import { Edit } from 'tabler-icons-react'

interface Props {
  sortedData: Product[]
  selection: string[]
  toggleRow: (id: string) => void
  openEdit: (product: Product) => void
}

export function ProductsTableBody({ sortedData, selection, toggleRow, openEdit }: Props) {
  console.log(openEdit)
  return (
    <tbody>
      {sortedData && sortedData.length > 0 ? (
        sortedData.map((row) => (
          <tr key={row.name}>
            <td>
              <Checkbox
                checked={selection.includes(row.name)}
                onChange={() => toggleRow(row.name)}
                transitionDuration={0}
              />
            </td>
            <td>{row.name}</td>
            <td>{row.price.toString()}</td>
            <td>{row.type}</td>
            <td>{row.families.toString()}</td>
            <td>
              <UnstyledButton
                onClick={() => openEdit(row)}
                sx={{
                  '&:hover': {
                    color: 'red',
                  },
                }}
              >
                <Edit />
              </UnstyledButton>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={Object.keys(sortedData?.[0] ?? {}).length}>
            <Text weight={500} align="center">
              Nothing found
            </Text>
          </td>
        </tr>
      )}
    </tbody>
  )
}
