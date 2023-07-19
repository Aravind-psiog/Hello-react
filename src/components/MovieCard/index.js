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
import MoviesApi from "../Api/MovieApi";
import CardContentent from "../MovieCard/cardContent";

const MovieCard = () => {
  const theme = useTheme();
  // {
  //   MoviesApi().map((movie) => console.log(movie.original_title));
  // }
  return (
    <Box sx={{ width: "100%" }} paddingTop={10} padding={10}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 30 }}
        columnGap={1}
        rowGap={5}
        justifyContent={"left"}
        // paddingTop={3}
        // alignItems={"center"}
      >
        {MoviesApi().map((movie) => (
          <CardContentent movies={movie}></CardContentent>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieCard;
