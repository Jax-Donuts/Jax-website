import { createStyles } from '@mantine/core'

export const useStyles = createStyles((object) => ({
  sidenav: {
    height: '100%',
    width: 0,
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: 'white',
    borderRight: '1px solid lightgrey',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '20px',
    display: 'none',
    '@media (width <= 1000px)': {
      display: 'block',
    },
  },
}))
