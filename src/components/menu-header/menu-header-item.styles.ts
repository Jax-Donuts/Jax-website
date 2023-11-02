import { MainColors } from '@/shared/constants'
import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    borderRadius: theme.radius.lg,
    width: '100%',
    height: 'auto',
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    margin: '1%',
    border: '1px solid  white',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)',
      backgroundColor: MainColors.PinkWhiteBG,
      borderColor: 'black',
      border: '1px solid  #FA5252',
    },
  },
  preHighlight: {
    backgroundColor: MainColors.PinkWhiteBG,
  },
}))
