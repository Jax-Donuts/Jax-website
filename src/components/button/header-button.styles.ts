import { MainColors } from '@/shared/constants'
import { createStyles } from '@mantine/core'

export const useStyles = createStyles((_) => ({
  button: {
    color: 'Black',
    position: 'relative',

    '&:before': {
      content: "''",
      position: 'absolute',
      width: '0',
      height: '3px',
      bottom: '0px',
      left: '50%',
      transform: 'translate(-50%,0%)',
      backgroundColor: MainColors.RedHover,
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
    },

    '&:hover:before': {
      visibility: 'visible',
      width: '100%',
    },

    '&:hover': {
      color: MainColors.RedHover,
      backgroundColor: 'transparent',
    },
  },
}))
