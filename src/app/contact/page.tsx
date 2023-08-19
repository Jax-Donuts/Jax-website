"use client";

import {
  Button,
  Card,
  Container,
  Group,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import {
  ClockHour4,
  Location as LocationIcon,
  Phone,
} from "tabler-icons-react";

import { LocationAddress } from "../../shared/constants";
import Link from "next/link";

export default function ContactUs() {
  const elements = [
    { day: "Monday", time: "4:00 AM - 5:00 PM" },
    { day: "Tuesday", time: "4:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "4:00 AM - 5:00 PM" },
    { day: "Thursday", time: "4:00 AM - 5:00 PM" },
    { day: "Friday", time: "4:00 AM - 5:00 PM" },
    { day: "Saturday", time: "4:00 AM - 3:30 PM" },
    { day: "Sunday", time: "4:00 AM - 12:30 PM" },
  ];
  const rows = elements.map((element, i) => (
    <tr key={i}>
      <td>{element.day}</td>
      <td>{element.time}</td>
    </tr>
  ));
  return (
    <>
      <Container>
        <Group noWrap align="center" h="100%" grow spacing="xs">
          <Card
            shadow="xl"
            radius="xl"
            sx={(theme) => ({
              backgroundImage: theme.fn.gradient({
                from: "red.7",
                to: "red.3",
                deg: 90,
              }),
            })}
          >
            <Text size="3rem" p="2rem" align="center" weight={700}>
              Contact Us
            </Text>
          </Card>
        </Group>
      </Container>

      <Container fluid px="10rem">
        <Group grow pt="md">
          <Card
            h="100%"
            bg="#FFF5F5"
            radius="xl"
            sx={() => ({ textAlign: "center" })}
          >
            <ClockHour4 color={"red"} size="10rem" />
            <Title pb="1rem">Hours*</Title>
            <Table captionSide="bottom" verticalSpacing="md">
              <caption>
                *Closing times may vary from day to day <br />
                Sorry for the inconvenience
              </caption>
              <tbody>{rows}</tbody>
            </Table>
          </Card>
          <Stack>
            <Card bg="#FFF5F5" radius="xl" sx={() => ({ textAlign: "center" })}>
              <LocationIcon color={"red"} size="10rem" />
              <Title align="center">Address</Title>
              <Text align="center">
                Come visit us!
                <br />
                <Link href="/location" passHref>
                  <Button>{LocationAddress}</Button>
                </Link>
              </Text>
            </Card>
            <Card bg="#FFF5F5" radius="xl" sx={() => ({ textAlign: "center" })}>
              <Phone color={"red"} size="10rem" />
              <Title>Call Us</Title>
              <Text align="center">
                Want to check if we have your favorites or place an order for
                pickup?
                <br />
                Then give us a quick call! <br /> <br />
                (909) 944-2992
              </Text>
            </Card>
          </Stack>
        </Group>
      </Container>
    </>
  );
}
