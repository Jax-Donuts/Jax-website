'use client'

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
          // ff='"BrandonGrotesque-Black",Arial,Helvetica,sans-serif'
        >
          menu
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MenuHeaderDropdown setOpened={setOpened} />
      </Popover.Dropdown>
    </Popover>
  )
}
