'use client'

import { Button, ButtonStylesParams, Styles } from '@mantine/core'
import { useStyles } from './header-button.styles'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  styles?: Styles<'root' | 'icon' | 'leftIcon' | 'rightIcon' | 'centerLoader' | 'inner' | 'label', ButtonStylesParams>
}

export function HeaderButton({ children, onClick, styles }: Props) {
  const { classes } = useStyles()

  return (
    <Button
      variant="subtle"
      size="md"
      pl={0}
      pr={0}
      fullWidth
      uppercase
      className={classes.button}
      onClick={onClick}
      styles={styles}
    >
      {children}
    </Button>
  )
}
