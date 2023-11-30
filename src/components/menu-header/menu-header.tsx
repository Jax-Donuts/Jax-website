'use client'

import { MainColors } from '@/shared/constants'
import { Button } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  setOpened: Dispatch<SetStateAction<boolean>>
}

export function MenuHeader({ setOpened }: Props) {
  return (
    <Button
      tt="uppercase"
      variant="subtle"
      pl={0}
      pr={0}
      size="md"
      onClick={() => setOpened((o) => !o)}
      sx={{
        color: 'Black',
        position: 'relative',

        '&:before': {
          content: "''",
          position: 'absolute',
          width: '0',
          height: '3px',
          bottom: '0px',
          left: '50%',
          transform: 'translate(-50%,0%)',
          backgroundColor: MainColors.RedHover,
          visibility: 'hidden',
          transition: 'all 0.3s ease-in-out',
        },

        '&:hover:before': {
          visibility: 'visible',
          width: '100%',
        },

        '&:hover': {
          color: MainColors.RedHover,
          backgroundColor: 'transparent',
        },
      }}
    >
      Menu
    </Button>
  )
}
