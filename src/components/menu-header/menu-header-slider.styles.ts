import { MainColors } from '@/shared/constants'
import { createStyles } from '@mantine/core'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((_) => ({
  item: {
    transition: 'all .35s ease',
    '&:hover': {
      textDecoration: 'solid underline black 4px',
      textUnderlineOffset: '8px',
    },
  },
  indicators: {
    backgroundColor: 'white',
    height: 10,
    marginTop: 30,
    padding: '10',
    position: 'relative',
    bottom: 0,
  },
  indicator: {
    backgroundColor: MainColors.RedStatic,
  },
}))
