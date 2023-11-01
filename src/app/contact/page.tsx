'use client'

import { PageHeader } from '@/components/page-header/page-header'
import { Button, Card, Container, Grid, Space, Stack, Table, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { ClockHour4, Location as LocationIcon, Phone } from 'tabler-icons-react'
import { LocationAddress } from '../../shared/constants'

export default function ContactUs() {
  const elements = [
    { day: 'Monday', time: '5:00 AM - 4:00 PM' },
    { day: 'Tuesday', time: '5:00 AM - 4:00 PM' },
    { day: 'Wednesday', time: '5:00 AM - 4:00 PM' },
    { day: 'Thursday', time: '5:00 AM - 4:00 PM' },
    { day: 'Friday', time: '5:00 AM - 4:00 PM' },
    { day: 'Saturday', time: '5:00 AM - 3:30 PM' },
    { day: 'Sunday', time: '5:00 AM - 12:30 PM' },
  ]
  const rows = elements.map((element, i) => (
    <tr key={i}>
      <td>{element.day}</td>
      <td>{element.time}</td>
    </tr>
  ))
  return (
    <>
      <PageHeader title="contact us" />
      <Space h="5vh" />
      <Container fluid px="10rem">
        <Grid grow>
          <Grid.Col span={4}>
            <Stack mih="100%" spacing="xl" justify="space-between" align="stretch">
              <Card bg="#FFF5F5" radius="xl" sx={() => ({ textAlign: 'center' })}>
                <ClockHour4 color="#FA5252" size="10rem" />
                <Title pb="1rem">Hours*</Title>
                <Table captionSide="bottom" verticalSpacing="md">
                  <caption>
                    *Closing times may vary from day to day <br />
                    Sorry for the inconvenience
                  </caption>
                  <tbody>{rows}</tbody>
                </Table>
              </Card>
            </Stack>
          </Grid.Col>
          <Grid.Col span={4}>
            <Stack mih="100%" spacing="xl" justify="space-between" align="stretch">
              <Card bg="#FFF5F5" radius="xl" sx={() => ({ textAlign: 'center' })}>
                <LocationIcon color="#FA5252" size="10rem" />
                <Title align="center">Address</Title>
                <Text align="center">
                  Come visit us!
                  <br />
                  <Link href="/location" passHref>
                    <Button>{LocationAddress}</Button>
                  </Link>
                </Text>
              </Card>
              <Card bg="#FFF5F5" radius="xl" sx={() => ({ textAlign: 'center' })}>
                <Phone color="#FA5252" size="10rem" />
                <Title>Call Us</Title>
                <Text align="center">
                  Want to check if we have your favorites or place an order for pickup?
                  <br />
                  Then give us a quick call! <br /> <br />
                  (909) 944-2992
                </Text>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}
