'use client'

import {
  Box,
  Button,
  Checkbox,
  Container,
  Group,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core'
import { isInRange, isNotEmpty, useForm } from '@mantine/form'
import React from 'react'

export default function Admin() {
  const form = useForm({
    initialValues: {
      itemName: '',
      displayName: '',
      priceValue: 0.0,
      itemSelect: '',
      familySelect: '',
    },
    validate: {
      itemName: isNotEmpty('Please enter an item name.'),
      displayName: isNotEmpty('Please enter a display name.'),
      priceValue: isInRange({ min: 0.01, max: 1000.0 }, 'Please enter a valid price.'),
      itemSelect: isNotEmpty('Please select a type.'),
      familySelect: isNotEmpty('Please select a family category.'),
    },
  })
  return (
    <>
      <Container
        sx={(theme) => ({
          backgroundColor: '#FFF5F5',
        })}
      >
        <Box>
          <Text align="center" fw={700}>
            Edit/Create Product Form
          </Text>
        </Box>

        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack spacing="xl">
            <TextInput
              placeholder="Glaze, jelly, chocolate cake, etc."
              label="Item Name"
              radius="md"
              required
              {...form.getInputProps('itemName')}
            />

            <TextInput
              placeholder="Name that will be displayed on page"
              label="Display Name"
              radius="md"
              required
              {...form.getInputProps('displayName')}
            />

            <NumberInput
              label="Price"
              defaultValue={0.0}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value)) ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') : '$ '
              }
              precision={2}
              step={0.05}
              min={0.0}
              max={1000.0}
              {...form.getInputProps('priceValue')}
            />

            <Select
              placeholder="Type of item"
              label="Type"
              radius="md"
              required
              data={[
                { value: 'donuts', label: 'Donuts' },
                { value: 'baked', label: 'Baked' },
                { value: 'drinks', label: 'Drinks' },
              ]}
              {...form.getInputProps('itemSelect')}
            />

            <Select
              placeholder="Item family"
              label="Family"
              radius="md"
              searchable
              nothingFound="Nothing found"
              required
              data={[
                { value: 'cake', label: 'Cake', group: 'Donuts' },
                { value: 'filled', label: 'Filled', group: 'Donuts' },
                { value: 'raised', label: 'Raised', group: 'Donuts' },
                { value: 'bagel', label: 'Bagel', group: 'Baked' },
                { value: 'croissant', label: 'Croissant', group: 'Baked' },
                { value: 'muffin', label: 'Muffin', group: 'Baked' },
                { value: 'bear claw', label: 'Bear Claw', group: 'Baked' },
                { value: 'coffee', label: 'Coffee', group: 'Drinks' },
                { value: 'tea', label: 'Tea', group: 'Drinks' },
                { value: 'juice', label: 'Juice', group: 'Drinks' },
                { value: 'soda', label: 'Soda', group: 'Drinks' },
                { value: 'energy', label: 'Energy', group: 'Drinks' },
                { value: 'other', label: 'Other', group: 'Other' },
              ]}
              {...form.getInputProps('familySelect')}
            />

            <Textarea placeholder="Item description" label="Description" autosize radius="md" />

            <Checkbox defaultChecked label="Available" description="Is the item currently being sold?" radius="sm" />

            <Button type="submit" variant="outline" color="red">
              Submit
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  )
}
