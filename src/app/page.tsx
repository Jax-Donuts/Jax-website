"use client";

import {
  Card,
  Container,
  Group,
  Title,
  // Image,
  Button,
  Stack,
  Box,
  Space,
  useMantineTheme,
} from "@mantine/core";
import { Location as LocationIcon, ShoppingCart } from "tabler-icons-react";
// import { LocationCard } from '../components/location-card/location-card'
import { MenuHeaderSlider } from "@/components/menu-header/menu-header-slider";
import { LocationCard } from "@/components";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const theme = useMantineTheme();

  return (
    <>
      <Container size="fluid" px="10rem">
        <Card shadow="sm" padding="lg" radius="xl" p={0}>
          <Group noWrap align="center" h="100%" grow spacing="xs">
            {/* <Image fit="contain" src="/donuts/sugar.jpeg"></Image>
             */}
            <Image
              src="/products/donuts/raised/sugar.jpeg"
              width={500}
              height={500}
              alt="sugar-donut"
              // object-fit="contain"
            />
            <Stack align="center">
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={200}
                // fill
                style={{ justifyContent: "center" }}
              />
              <Title align="left" color="red" fw={700} size={80}>
                Jax Donut
              </Title>
            </Stack>
          </Group>
        </Card>
        <Space h="10vh" />
        <Title
          fw="bold"
          ta="center"
          sx={{ textTransform: "uppercase" }}
          size={40}
        >
          explore donuts
        </Title>
        <Box p={0} h="20vh">
          <MenuHeaderSlider productType="donuts" preHighlight />
        </Box>
        <Space h="15vh" />
        <Card shadow="sm" padding="lg" radius="xl" p={0} bg="#fff2f2" h="40vh">
          <Group noWrap align="center" h="100%" grow>
            <Box
              miw="50%"
              h="100%"
              p="5%"
              style={{ position: "relative", justifyContent: "left" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="generic-image"
                layout="fill"
              ></Image>
            </Box>

            <Box miw="50%" p="5%">
              <Title h="100%" sx={{ textTransform: "uppercase" }}>
                try a refreshing
                <br /> thai tea!
              </Title>
              <Space h="md" />
              <Link href="/menu/productType/drinks" passHref>
                <Button
                  // color="red"
                  radius={30}
                  size="lg"
                  bg="red"
                  sx={(theme) => ({
                    "&:hover": {
                      color: "black",
                      backgroundColor: theme.colors.red[6],
                      transform: "scale(1.05)",
                    },

                    "@media (max-width: 48em)": {
                      fontSize: "0.9rem",
                    },
                  })}
                >
                  Drinks
                </Button>
              </Link>
            </Box>
          </Group>
        </Card>
        <Space h="5vh" />
        <Group noWrap align="center" grow>
          <Card
            w="50%"
            shadow="sm"
            padding="lg"
            radius="xl"
            p={0}
            bg="#fff2f2"
            h="40vh"
          >
            <Group noWrap align="center" h="100%" grow>
              <ShoppingCart color={theme.colors["red"][6]} size="10rem" />
              <Box miw="50%" p="5%">
                <Title h="100%" sx={{ textTransform: "uppercase" }}>
                  Catering
                </Title>
                <Space h="md" />
                <Link href="/about" passHref>
                  <Button color="red" radius={30} size="lg">
                    Order Catering
                  </Button>
                </Link>
              </Box>
            </Group>
          </Card>

          <Card
            shadow="sm"
            padding="lg"
            radius="xl"
            p={0}
            bg="#fff2f2"
            h="40vh"
          >
            <Group noWrap align="center" h="100%" grow>
              <LocationIcon color={theme.colors["red"][6]} size="10rem" />
              <Box miw="50%" p="5%">
                <LocationCard hideMap />
                <Space h="md" />
                <Container ta="center">
                  <Link href="/location" passHref>
                    <Button color="red" radius={30} size="lg">
                      Find
                    </Button>
                  </Link>
                </Container>
              </Box>
            </Group>
          </Card>
        </Group>
        <Space h="10vh" />
      </Container>
    </>
  );
}
