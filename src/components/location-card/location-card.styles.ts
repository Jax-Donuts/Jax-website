import { MainColors } from '@/shared/constants'
import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  cityTitle: {
    'font-weight': 'bold',
    '&:hover': {
      color: MainColors.RedHover,
    },
    'text-decoration': 'none',
  },

  mapButton: {
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: MainColors.RedHover,
    },
  },
}))
