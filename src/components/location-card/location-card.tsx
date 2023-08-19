'use client'

import { Container, Title, Text, Anchor, Button, Box } from '@mantine/core'
import React from 'react'
import { LocationAddress, LocationAddressGoogleMapsLink, LocationCity } from '../../shared/constants'
import { useLocation } from './use-location'
import { useStyles } from './location-card.styles'

interface Props {
  hideMap?: boolean
}

import Image from 'next/image'
export function LocationCard({ hideMap }: Props) {
  const distance = useLocation()
  const { classes } = useStyles()

  return (
    <React.Fragment>
      <Container>
        <Title ta="center" m="sm" color="red">
          Our Shop
        </Title>
      </Container>
      <Container ta="center">
        <Anchor
          href={LocationAddressGoogleMapsLink}
          target="_blank"
          underline={false}
          size={20}
          className={classes.cityTitle}
        >
          {LocationCity}
        </Anchor>
        {distance ? (
          <Text italic={true} color="dimmed">
            {distance.toFixed(2)} miles
          </Text>
        ) : null}
        <Text sx={{ whiteSpace: 'pre-line', marginTop: 20 }}>{LocationAddress}</Text>
        {!hideMap ? (
          <Button
            mt={10}
            p={0}
            bg="grey"
            w={340}
            h={200}
            onClick={() => window.open(LocationAddressGoogleMapsLink)}
            className={classes.mapButton}
            radius="md"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <Image src="/static-map-image.png" alt="map" layout="fill" />
          </Button>
        ) : null}
      </Container>
    </React.Fragment>
  )
}
