import { createStyles } from '@mantine/core'

export const useStyles = createStyles((_) => ({
  loginContainer: {
    top: 0,
    zIndex: 1,
    backgroundColor: 'white',
    borderBottom: '1px solid lightgrey',
    '@media (width <= 1000px)': {
      display: 'none',
    },
  },
  menuColumn: {
    '@media (width <= 1000px)': {
      display: 'none',
    },
  },
  /** Use important to overload mantine image */
  headerLogo: {
    width: '60px !important',
    height: '60px !important',
    '@media (width <= 1000px)': {
      width: '25px !important',
      height: '25px !important',
    },
  },
  simpleGrid: {
    width: '300px !important',
    '@media (width <= 1000px)': {
      width: '100vw !important',
    },
  },
  burger: {
    display: 'none',
    '@media (width <= 1000px)': {
      display: 'block',
    },
  },
  headerContainer: {
    top: 0,
    zIndex: 1,
    backgroundColor: 'white',
    borderBottom: '1px solid lightgrey',
    '@media (width <= 1000px)': {
      paddingLeft: '2%',
      paddingRight: '2%',
      border: 'none',
    },
  },
  headerTitle: {
    textWrap: 'nowrap',
    '@media (width <= 1000px)': {
      fontSize: '1.5rem',
    },
    '@media (width <= 500px)': {
      fontSize: '1rem',
    },
  },
}))
