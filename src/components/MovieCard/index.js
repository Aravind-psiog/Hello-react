import { Grid, Box, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import MoviesApi from "../Api/HomeMovieApi";
import CardContentent from "./HomeCardContent";
import Pagination from "@mui/material/Pagination";

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
