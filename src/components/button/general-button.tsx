'use client'

import { Button, ButtonProps } from '@mantine/core'
import { useStyles } from './general-button.styles'

interface Props extends ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export function GeneralButton({ children, onClick, ...props }: Props) {
  const { classes } = useStyles()

  return (
    <Button onClick={onClick} variant="filled" size="md" radius="xl" className={classes.button} {...props}>
      {children}
    </Button>
  )
}
