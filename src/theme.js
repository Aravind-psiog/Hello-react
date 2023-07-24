import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1c1c1b ",
    },
    secondary: {
      main: "#000000 ",
    },
    page: {
      main: "#ffffff ",
    },
  },
  typography: {
    h2: {
      fontSize: "20px",
      color: "white",
    },
    h1: {
      fontSize: "15px",
      color: "#82809e",
    },
    h8: {
      color: "white",
    },
  },
  breakpoints: {
    values: {
      xs: 200,
    },
  },
});
