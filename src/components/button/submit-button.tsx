'use client'

import React from 'react'
import { Button, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  button: {
    color: theme.black,
    backgroundColor: theme.colors.red[6],
    '&:hover': {
      color: theme.black,
      backgroundColor: theme.colors.red[8],
    },
  },
}))

export function SubmitButton({ text }: { text: string }) {
  const { classes } = useStyles()

  return (
    <>
      <Button type="submit" className={classes.button} variant="filled" color="red" radius="xl">
        {text}
      </Button>
    </>
  )
}
