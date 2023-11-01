'use client'

import { Button } from '@mantine/core'
import { useStyles } from './general-button.styles'

interface Props {
  text: string
}

export function GeneralButton({ text }: Props) {
  const { classes } = useStyles()

  return (
    <>
      <Button variant="filled" size="md" radius="xl" className={classes.button}>
        {text}
      </Button>
    </>
  )
}
