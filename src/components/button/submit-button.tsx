'use client'

import React from 'react'
import { Button, createStyles } from '@mantine/core'
import { useStyles } from './submit-button.styles'

interface Props {
  text: string
}

export function SubmitButton({ text }: Props) {
  const { classes } = useStyles()

  return (
    <>
      <Button type="submit" className={classes.button} variant="filled" color="red" radius="xl">
        {text}
      </Button>
    </>
  )
}
