"use client";

import { Button, Popover } from "@mantine/core";
import { MenuHeaderDropdown } from "./menu-header-dropdown";
import { useState } from "react";

export function MenuHeader() {
  const [opened, setOpened] = useState(false);

  return (
    <Popover opened={opened} onChange={setOpened} width="100%" shadow="md">
      <Popover.Target>
        <Button variant="subtle" size="md" onClick={() => setOpened((o) => !o)}>
          Menu
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MenuHeaderDropdown setOpened={setOpened} />
      </Popover.Dropdown>
    </Popover>
  );
}
