'use client'

import { Button } from '@mantine/core'
import { useStyles } from './submit-button.styles'

interface Props {
  text: string
  onClick: () => void
}

export function SubmitButton({ text, onClick }: Props) {
  const { classes } = useStyles()

  return (
    <>
      <Button type="submit" variant="filled" radius="xl" className={classes.button} onClick={onClick}>
        {text}
      </Button>
    </>
  )
}
