import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Typography, Grid, Box } from "@mui/material";
import MoviesApi from "../Api/HomeMovieApi";
import CardContentent from "../../components/MovieCard/HomeCardContent";

export default function PaginationControlled() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

  return (
    <Grid>
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
        {MoviesApi(page).map((movie) => (
          <CardContentent movies={movie}></CardContentent>
        ))}
      </Grid>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={10}
          color="secondary"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Grid>
  );
}
