import HeaderTemplate from "./components/Header/HomeHeader";
import MovieCard from "./components/MovieCard/index";
import { Grid, Box } from "@mui/material";
import MovieBanner from "./components/MovieCard/HomeMovieBanner";
import ThemeProvider from "@mui/system/ThemeProvider";
import { theme } from "./theme";
import "./App.css";
import PaginationControlled from "./components/Pagenation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid>
          <HeaderTemplate />
        </Grid>
        <MovieBanner />
        <Grid>{/* <MovieCard /> */}</Grid>
        <PaginationControlled />
        {/* <Grid item xs={4}>
        <MovieCard />
      </Grid> */}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
