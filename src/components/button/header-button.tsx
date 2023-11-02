'use client'

import { Button } from '@mantine/core'
import { useStyles } from './header-button.styles'

interface Props {
  text: string
  onClick?: () => void
}

export function HeaderButton({ text, onClick }: Props) {
  const { classes } = useStyles()

  return (
    <>
      <Button variant="subtle" size="md" uppercase className={classes.button} onClick={onClick}>
        {text}
      </Button>
    </>
  )
}
