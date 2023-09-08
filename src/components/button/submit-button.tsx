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
      <Button
        type="submit"
        className={classes.button}
        variant="filled"
        color="red"
        radius="xl"
        onClick={() => onClick()}
      >
        {text}
      </Button>
    </>
  )
}
