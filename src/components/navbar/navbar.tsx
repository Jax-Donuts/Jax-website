import { MainColors } from '@/shared/constants'
import { Burger, Center, Stack } from '@mantine/core'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { HeaderButton } from '..'
import { useStyles } from './navbar.styles'

const data = [
  { link: '', label: 'Notifications' },
  { link: '', label: 'Billing' },
  { link: '', label: 'Security' },
  { link: '', label: 'SSH Keys' },
  { link: '', label: 'Databases' },
  { link: '', label: 'Authentication' },
  { link: '', label: 'Other Settings' },
]

export function NavbarSimpleColored({ width, toggle }: { width: number; toggle: () => void }) {
  console.log(width)
  const { classes } = useStyles()
  const { data: session } = useSession()

  return (
    <div id="custom-navbar" className={classes.sidenav} style={{ width }}>
      <Stack px="10%">
        <Center styles={{ borderBottom: '1px solid lightgrey' }}>
          <Burger opened={true} onClick={toggle} color={MainColors.RedStatic} />
        </Center>
        <Link href="/">
          <HeaderButton onClick={toggle} styles={{ inner: { justifyContent: 'left' } }}>
            Home
          </HeaderButton>
        </Link>
        {/* <MenuHeader setOpened={setOpened} /> */}
        <Link href="/location" passHref>
          <HeaderButton onClick={toggle} styles={{ inner: { justifyContent: 'left' } }}>
            Location
          </HeaderButton>
        </Link>
        <Link href="/contact" passHref>
          <HeaderButton onClick={toggle} styles={{ inner: { justifyContent: 'left' } }}>
            Contact Us
          </HeaderButton>
        </Link>
        <Link href="/about">
          <HeaderButton onClick={toggle} styles={{ inner: { justifyContent: 'left' } }}>
            About
          </HeaderButton>
        </Link>
        {session?.user.isAdmin ? (
          <Link href="/admin">
            <HeaderButton onClick={toggle} styles={{ inner: { justifyContent: 'left' } }}>
              Admin
            </HeaderButton>
          </Link>
        ) : (
          <div></div>
        )}
      </Stack>
    </div>
  )
}
