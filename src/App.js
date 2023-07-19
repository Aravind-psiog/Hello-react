import HeaderTemplate from "./components/Header/Header";
import MovieCard from "./components/MovieCard/index";
import { Grid, Box } from "@mui/material";
function App() {
  return (
    <Grid container>
      <Grid>
        <HeaderTemplate />
      </Grid>
      <Grid>
        <MovieCard />
      </Grid>
      {/* <Grid item xs={4}>
        <MovieCard />
      </Grid> */}
    </Grid>
  );
}

export default App;
