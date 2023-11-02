import { MainColors } from '@/shared/constants'
import { createStyles } from '@mantine/core'

export const useStyles = createStyles((_) => ({
  button: {
    color: 'black',
    backgroundColor: MainColors.RedStatic,
    '&:hover': {
      color: 'black',
      backgroundColor: MainColors.RedHover,
    },
  },
}))
