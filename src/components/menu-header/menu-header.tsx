'use client'

import { MainColors } from '@/shared/constants'
import { Button, Popover } from '@mantine/core'
import { useState } from 'react'
import { MenuHeaderDropdown } from './menu-header-dropdown'

export function MenuHeader() {
  const [opened, setOpened] = useState(false)

  return (
    <Popover opened={opened} onChange={setOpened} width="100%" shadow="md">
      <Popover.Target>
        <Button
          tt="uppercase"
          variant="subtle"
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
      </Popover.Target>
      <Popover.Dropdown>
        <MenuHeaderDropdown setOpened={setOpened} />
      </Popover.Dropdown>
    </Popover>
  )
}
