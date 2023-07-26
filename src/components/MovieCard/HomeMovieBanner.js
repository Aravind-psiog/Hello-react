import { Grid, Box, useTheme, Paper, Typography } from "@mui/material";
import oppenheimer from "../../asset/oppenheimer.jpg";
import "./style.css";
import IconButton from "@mui/material/IconButton";
import ImageFetcher from "../Helpers/ImageFetcher";
const images = require.context(
  "../../asset/ott/",
  false,
  /\.(png|jpe?g|svg|webp)$/
);
const MovieBanner = (props) => {
  return (
    <Grid
      container
      justify="center"
      paddingTop={"60px"}
      maxWidth={"90%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {ImageFetcher().map((image) => (
        <IconButton alignItems="center">
          <img className="ott-icons" src={image}></img>
        </IconButton>
      ))}
    </Grid>
  );
};

export default MovieBanner;
