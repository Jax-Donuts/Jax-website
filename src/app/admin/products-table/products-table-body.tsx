import { MainColors } from '@/shared/constants'
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
        sortedAndFilteredData.map((product) => (
          <tr key={product.name}>
            <td>
              <Checkbox
                checked={selection.includes(product.name)}
                onChange={() => toggleRow(product.name)}
                transitionDuration={0}
              />
            </td>
            <td>{product.name}</td>
            <td>{product.price.toString()}</td>
            <td>{product.type}</td>
            <td>{product.families.join(', ')}</td>
            <td>
              <UnstyledButton
                onClick={() => openEdit(product)}
                sx={{
                  '&:hover': {
                    color: MainColors.RedHover,
                  },
                }}
              >
                <Edit />
              </UnstyledButton>
            </td>
            <td>
              <UnstyledButton
                onClick={() => openDelete(product)}
                sx={{
                  '&:hover': {
                    color: MainColors.RedHover,
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
