'use client'

import { Button } from '@mantine/core'
import { useStyles } from './header-button.styles'

interface Props {
  children: React.ReactNode
  onClick?: () => void
}

export function HeaderButton({ children, onClick }: Props) {
  const { classes } = useStyles()

  return (
    <Button variant="subtle" size="md" pl={0} pr={0} fullWidth uppercase className={classes.button} onClick={onClick}>
      {children}
    </Button>
  )
}
