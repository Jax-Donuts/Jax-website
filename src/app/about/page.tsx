'use client'

import { Box, Card, Container, Group, Image, Text } from '@mantine/core'
import { useStyles } from './page.styles'

const mainMessage = [
  `
  Welcome to Jax Donut - a beloved family-owned and operated haven
  for delectable treats, serving our community since 1997!
`,
  `
  At Jax Donut, we count our blessings every day, grateful for the
  opportunity to spread joythrough our mouthwatering donuts.Our
  story began over two decades ago, when our family's love for
  creating delicious delicious treats inspired us to open our
  doors to the neighborhood. Located in our wonderful city of
  Rancho Cucamonga, Jax Donut has become a place where smiles and
  laughter are shared freely. Our simple goal is to craft donuts
  that warm your heart and tickle your taste buds, reminding you
  of the simple joys in life.
`,
  `
  As a small, family-run business, we cherish each and every
  customer who walks through our door. Your support has allowed us
  to pursue our passion, and we are humbled by the friendships
  we've forged along the way. Your kind words and encouragement
  motivate us to constantly improve and bring you the very best.
`,
  `
  We may not be the fanciest or the flashiest donut shop in town,
  but what truly matters to us is the genuine connections we've
  made with our customers. Your smiles, your stories, and your
  loyalty make our journey all the more meaningful.
`,
  `

  Jax Donut isn't just a business; it's a place where families
  gather, friendships are made, and memories are created. We take
  pride in being a small part of your lives and celebrating life's
  special moments with you.
`,
  `
  Thank you, from the bottom of our hearts, for being a part of
  our story. It is your continued support that allows us to do
  what we love every day. We promise to remain true to our values
  and to keep delighting you withour humble offerings.
`,
  `With heartfelt gratitude,`,
  `The Jax Donut Family`,
]

export default function About() {
  const { classes } = useStyles()

  return (
    <>
      <Container>
        <Group noWrap align="center" h="100%" grow spacing="xs">
          <Card
            shadow="xl"
            radius="xl"
            sx={(theme) => ({
              backgroundImage: theme.fn.gradient({
                from: 'red.7',
                to: 'red.3',
                deg: 90,
              }),
            })}
          >
            <Text size="3rem" className={classes.mainTitle}>
              About Us
            </Text>
          </Card>
        </Group>
      </Container>

      <Container fluid px="10rem">
        <Group noWrap align="center" h="100%" grow spacing="xs" pt="md">
          <Box>
            <Text>
              {mainMessage.map((message, i) => {
                return <p key={i}>{message}</p>
              })}
            </Text>
          </Box>
          <Box>
            <Image
              height="45rem"
              radius="xl"
              fit="contain"
              src="https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="baking"
            />
          </Box>
        </Group>
      </Container>
    </>
  )
}
