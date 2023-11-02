'use client'

import { SubmitButton } from '@/components'
import { MainColors } from '@/shared/constants'
import { ProductDto } from '@/shared/product-types'
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
import { Dispatch, SetStateAction } from 'react'
import { useAddProduct } from '../use-add-product'
import { useEditProduct } from '../use-edit-product'

interface Props {
  product?: ProductDto
  getProducts: () => Promise<void>
  onClose: () => void
  setProduct: Dispatch<SetStateAction<ProductDto | undefined>>
}
export default function EditProductForm({ product, getProducts, onClose, setProduct }: Props) {
  const { createProduct } = useAddProduct(getProducts)

  const { editProduct } = useEditProduct(getProducts)

  const form = useForm({
    initialValues: {
      name: product?.name ?? '',
      displayName: product?.displayName ?? '',
      available: product?.available ?? true,
      price: product?.price ?? 0.0,
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

  return (
    <>
      <Container>
        <Paper radius="md" bg={MainColors.PinkWhiteBG} p="xl">
          <Box>
            <Text align="center" fw={700}>
              {product ? 'Edit' : 'Create'} Product
            </Text>
          </Box>

          <form
            onSubmit={async (e) => {
              e.preventDefault()
              if (product) {
                const editedProductData = { ...form.values }
                await editProduct(product.id, editedProductData)
              } else {
                createProduct(form.values)
              }
              onClose()
              setProduct(undefined)
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
              <Textarea
                placeholder="Item description"
                label="Description"
                autosize
                radius="md"
                {...form.getInputProps('description')}
              />
              <Checkbox
                defaultChecked
                label="Available"
                description="Is the item currently being sold?"
                radius="sm"
                {...form.getInputProps('available')}
              />
              <SubmitButton text={product ? 'Update' : 'Submit'} onClick={() => {}} />
            </Stack>
          </form>
        </Paper>
      </Container>
    </>
  )
}
