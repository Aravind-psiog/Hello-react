import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#282b2e ",
    },
  },
  typography: {
    h1: {
      fontSize: "20px",
    },
  },
  breakpoints: {
    values: {
      xs: 200,
    },
  },
});
