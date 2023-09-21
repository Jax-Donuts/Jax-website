import { ProductDto } from '@/shared/product-types'
import { Checkbox, UnstyledButton } from '@mantine/core'

import { Edit, Trash } from 'tabler-icons-react'

interface Props {
  sortedAndFilteredData: ProductDto[]
  selection: string[]
  toggleRow: (id: string) => void
  openEdit: (product: ProductDto) => void
  openDelete: (product: ProductDto) => void
}

export function ProductsTableBody({ sortedAndFilteredData, selection, toggleRow, openEdit, openDelete }: Props) {
  return (
    <tbody>
      {sortedAndFilteredData && sortedAndFilteredData.length > 0 ? (
        sortedAndFilteredData.map((row) => (
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
            <td>
              <UnstyledButton
                onClick={() => openDelete(row)}
                sx={{
                  '&:hover': {
                    color: 'red',
                  },
                }}
              >
                <Trash />
              </UnstyledButton>
            </td>
          </tr>
        ))
      ) : (
        <tr></tr>
      )}
    </tbody>
  )
}
