import HeaderTemplate from "./components/Header/Header";
import MovieCard from "./components/MovieCard/index";
import { Grid, Box } from "@mui/material";
function App() {
  return (
    <Grid container>
      <Grid>
        <HeaderTemplate />
      </Grid>

      <MovieCard />
    </Grid>
  );
}

export default App;
