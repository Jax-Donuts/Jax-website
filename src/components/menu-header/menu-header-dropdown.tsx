import { Container, Group, Text, UnstyledButton } from '@mantine/core'
import { useState } from 'react'
import { productTypes } from '../../shared/product-types'
import { useStyles } from './menu-header-dropdown.styles'
import { MenuHeaderSlider } from './menu-header-slider'

interface Props {
  setOpened?: React.Dispatch<React.SetStateAction<boolean>>
}

export function MenuHeaderDropdown({ setOpened }: Props) {
  const { classes } = useStyles()

  const [selectedProductType, setSelectedProductType] = useState<keyof typeof productTypes>('donuts')

  return (
    <Container>
      <Group spacing="xl" position="center">
        {Object.keys(productTypes).map((productType) => (
          <UnstyledButton
            key={'button' + productType}
            p="1rem"
            onMouseOver={() => setSelectedProductType(productType as keyof typeof productTypes)}
          >
            <Text size="xl" fw="bold" className={classes.item}>
              {productType.toUpperCase()}
            </Text>
          </UnstyledButton>
        ))}
      </Group>
      <MenuHeaderSlider productType={selectedProductType} setOpened={setOpened} />
    </Container>
  )
}
