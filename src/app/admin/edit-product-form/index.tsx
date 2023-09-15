'use client'

import { SubmitButton } from '@/components'
import {
  Box,
  Checkbox,
  Container,
  MultiSelect,
  NumberInput,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core'
import { isInRange, isNotEmpty, useForm } from '@mantine/form'
import { Product } from '@prisma/client'
import { FormEvent, useState } from 'react'
import { useAddProduct } from '../use-add-product'

interface Props {
  product?: Product
}
export default function EditProductForm({ product }: Props) {
  console.log(product)
  const { createProduct } = useAddProduct()
  const [editing, setEditing] = useState(!!product)
  const form = useForm({
    initialValues: {
      name: product?.name ?? '',
      displayName: product?.displayName ?? '',
      available: product?.available ?? true,
      price: product?.price.toNumber() ?? 0.0,
      type: product?.type ?? '',
      families: product?.families ?? [''],
      description: product?.description ?? '',
    },
    validate: {
      name: isNotEmpty('Please enter an item name.'),
      displayName: isNotEmpty('Please enter a display name.'),
      price: isInRange({ min: 0.01, max: 1000.0 }, 'Please enter a valid price.'),
      type: isNotEmpty('Please select a type.'),
      families: isNotEmpty('Please select a family category.'),
    },
  })

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, displayName, available, price, type, families, description } = form.values
    try {
      await createProduct(form.values)
      console.log('Product created')
    } catch {
      console.log('Error')
    }
  }
  return (
    <>
      <Container>
        <Paper radius="md" bg="#FFF5F5" p="xl">
          <Box>
            <Text align="center" fw={700}>
              Edit/Create Product
            </Text>
          </Box>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              console.log('Form Values: ', form.values)
              createProduct(form.values)
            }}
          >
            <Stack spacing="xl">
              <TextInput
                placeholder="Glaze, jelly, chocolate cake, etc."
                label="Item Name"
                radius="md"
                withAsterisk
                {...form.getInputProps('name')}
              />
              <TextInput
                placeholder="Name that will be displayed on page"
                label="Display Name"
                radius="md"
                withAsterisk
                {...form.getInputProps('displayName')}
              />
              <NumberInput
                label="Price"
                defaultValue={0.0}
                required
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                formatter={(value) =>
                  !Number.isNaN(parseFloat(value)) ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') : '$ '
                }
                precision={2}
                step={0.05}
                min={0.0}
                max={1000.0}
                {...form.getInputProps('price')}
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
                {...form.getInputProps('type')}
              />
              <MultiSelect
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
                {...form.getInputProps('families')}
              />
              <Textarea placeholder="Item description" label="Description" autosize radius="md" />
              <Checkbox defaultChecked label="Available" description="Is the item currently being sold?" radius="sm" />
              <SubmitButton
                text={editing ? 'Update' : 'Submit'}
                onClick={() => (editing ? console.log('Editing') : console.log('Creating'))}
              />
            </Stack>
          </form>
        </Paper>
      </Container>
    </>
  )
}
