'use client'

import { Anchor, Button, Container, Text, Title } from '@mantine/core'
import React from 'react'
import { LocationAddress, LocationAddressGoogleMapsLink, LocationCity, MainColors } from '../../shared/constants'
import { useStyles } from './location-card.styles'
import { useLocation } from './use-location'

interface Props {
  hideTitle?: boolean
  hideMap?: boolean
}

import Image from 'next/image'
export function LocationCard({ hideMap, hideTitle }: Props) {
  const distance = useLocation()
  const { classes } = useStyles()

  return (
    <React.Fragment>
      {!hideTitle ? (
        <Container>
          <Title ta="center" m="sm" color={MainColors.RedStatic}>
            Our Shop
          </Title>
        </Container>
      ) : null}
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
