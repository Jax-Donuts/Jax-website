'use client'

import { Box, Container, Group, Space, Title } from '@mantine/core'

import CateringCard from '@/components/home-page-cards/catering-card'
import OurShopCard from '@/components/home-page-cards/our-shop-card'
import TitleCard from '@/components/home-page-cards/title-card'
import TryNewProductCard from '@/components/home-page-cards/try-new-product-card'
import { MenuHeaderSlider } from '@/components/menu-header/menu-header-slider'

export default function Home() {
  return (
    <>
      <Container size="fluid" px="15%">
        <Space h="10vh" />
        <TitleCard />
        <Space h="10vh" />
        <Title fw="bold" ta="center" sx={{ textTransform: 'uppercase' }} size={40}>
          explore donuts
        </Title>
        <Box p={0} h="20vh">
          <MenuHeaderSlider productType="donuts" preHighlight />
        </Box>
        <Space h="15vh" />
        <TryNewProductCard />
        <Space h="5vh" />
        <Group noWrap align="center" grow>
          <CateringCard />
          <OurShopCard />
        </Group>
        <Space h="10vh" />
      </Container>
    </>
  )
}
