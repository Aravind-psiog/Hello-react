import { Grid, useTheme } from "@mui/material";

import MoviesApi from "../Api/HomeMovieApi";
import CardContentent from "./HomeCardContent";

const MovieCard = () => {
  const theme = useTheme();
  // {
  //   MoviesApi().map((movie) => console.log(movie.original_title));
  // }
  return (
    <Grid
      container
      rowSpacing={1}
      // columnSpacing={{ xs: 1, sm: 2, md: 30 }}
      columnGap={1}
      rowGap={5}
      justifyContent={"left"}
      paddingTop={10}
      padding={10}
    >
      {MoviesApi(5).map((movie) => (
        <CardContentent movies={movie}></CardContentent>
      ))}
    </Grid>
  );
};

export default MovieCard;
