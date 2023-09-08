import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  button: {
    color: theme.black,
    backgroundColor: '#fa5252',
    '&:hover': {
      color: theme.black,
      backgroundColor: theme.colors.red[8],
    },
  },
}))
