import HeaderTemplate from "./components/Header/Header";
import MovieCard from "./components/MovieCard/index";
import { Grid, Box } from "@mui/material";
function App() {
  return (
    <Grid container>
      <Grid>
        <HeaderTemplate />
      </Grid>
      <Grid item xs={10} lg={3} xl={2} direction={"row"}>
        <MovieCard />
      </Grid>
    </Grid>
  );
}

export default App;
