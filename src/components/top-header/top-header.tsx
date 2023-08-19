"use client";

import { Button, Container, Grid, Group, Title } from "@mantine/core";
import { MenuHeader } from "../menu-header/menu-header";
import Link from "next/link";
import Image from "next/image";

export function TopHeader() {
  return (
    <Container size="fluid" px="10rem" pb="xl">
      <Grid>
        <Grid.Col span="auto">
          <Link href="/">
            <Group spacing="xs">
              {/* <Image width="2rem" height="2rem" fit="fill" src="/donut.png" /> */}

              <Image src="/logo.png" alt="logo" width={32} height={32} />
              <Title size="2rem" align="left" color="red" fw={700}>
                Jax Donut
              </Title>
            </Group>
          </Link>
        </Grid.Col>

        <Grid.Col span="auto">
          <Group position="right" spacing="xl">
            <Link href="/">
              <Button variant="subtle" size="md">
                Home
              </Button>
            </Link>
            <MenuHeader />
            <Link href="/location" passHref>
              <Button variant="subtle" size="md">
                Location
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="subtle" size="md">
                Contact Us
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="subtle" size="md">
                About
              </Button>
            </Link>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
