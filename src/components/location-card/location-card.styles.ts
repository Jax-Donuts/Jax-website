import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  cityTitle: {
    "font-weight": "bold",
    "&:hover": {
      color: theme.colors.red[6],
    },
    "text-decoration": "none",
  },

  mapButton: {
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: theme.colors.red[6],
    },
  },
}));
