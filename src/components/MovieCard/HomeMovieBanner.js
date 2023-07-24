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
    <Box
      container
      justify="center"
      paddingTop={"60px"}
      maxWidth={"90%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h1">
        Where to watch movies online? A movie evening always starts with a very
        time-consuming and frustrating search for where to watch movies online.
        MMDB is there to help you find all the movies you can stream legally in
        India and make your life easier.
      </Typography>
      {ImageFetcher().map((image) => (
        <IconButton alignItems="center">
          <img className="ott-icons" src={image}></img>
        </IconButton>
      ))}
    </Box>
  );
};

export default MovieBanner;
