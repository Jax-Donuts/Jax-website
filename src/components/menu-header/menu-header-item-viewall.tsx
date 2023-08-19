import { UnstyledButton, Text } from '@mantine/core'

import { useStyles } from './menu-header-item.styles'
import { useMenuHeaderItem } from './use-menu-header-item'
import Link from 'next/link'

interface Props {
  productType: string
  preHighlight?: boolean
  onClick: () => void
}

export function MenuHeaderItemViewall({ productType, preHighlight, onClick }: Props) {
  const { classes, theme, cx } = useStyles()

  const IconComponent = useMenuHeaderItem(productType)

  if (!productType) return null

  return (
    <Link href={`/menu/productType/${productType}`} passHref>
      <UnstyledButton
        className={cx(classes.item, { [classes.preHighlight]: preHighlight })}
        my={10}
        px={20}
        py={20}
        onClick={() => {
          onClick()
        }}
      >
        {/* This is a temporary donut icon to display. We will replace with actual donut images */}
        <IconComponent color={theme.colors['red'][6]} size="10rem" />
        <Text size="sm" fw="bold" ff="Arial,Helvetica,sans-serif">
          {`view all ${productType}`.toUpperCase()}
        </Text>
      </UnstyledButton>
    </Link>
  )
}
