'use client'

import { Button } from '@mantine/core'
import { useStyles } from './general-button.styles'

interface Props {
  children: React.ReactNode
  onClick?: () => void
}

export function GeneralButton({ children, onClick }: Props) {
  const { classes } = useStyles()

  return (
    <Button onClick={onClick} variant="filled" size="md" radius="xl" className={classes.button}>
      {children}
    </Button>
  )
}
