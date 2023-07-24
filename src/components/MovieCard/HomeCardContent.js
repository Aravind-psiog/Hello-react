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
import Rating from "@mui/material/Rating";
import InfoIcon from "@mui/icons-material/Info";

const CardContentent = (props) => {
  const data = props.movies.backdrop_path;
  const img = "http://image.tmdb.org/t/p/w500/" + `${data}`;
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: "secondary.main" }}>
      <CardMedia
        sx={{ height: 200 }}
        component="img"
        image={img}
        alt={props.movies.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h8" component="div">
          <Box width={"280px"} height={"30px"}>
            {props.movies.title}
          </Box>
        </Typography>
        <Box width={"20%"}>
          <Rating
            name="text-feedback"
            value={props.movies.vote_average / 2}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarRateIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Box>
        <Box padding={"10px"}>
          <Typography fontSize={10} fontFamily={"Segoe UI"} color={"grey"}>
            {props.movies.release_date}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <InfoIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardContentent;
