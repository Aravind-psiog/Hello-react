import Api from "../AxiosAPI/ApiInitialiser";
import axios from "axios";
import ApiConfigs from "./ApiConfigurations";
import React, { useState, useEffect } from "react";

export default function DataFetch(payload) {
  console.log("page number is: ", payload["page"]);
  const [getMovies, setMovies] = useState([]);
  // if (payload["page"]===1) {
  //   console.log("nothing to display");
  // }
  useEffect(() => {
    Api.get(
      "discover/movie?api_key=" + ApiConfigs.apiKey + "&page=" + payload["page"]
    ).then((movies) => {
      setMovies(movies.data.results);
      // return getMovies;
      // movie_list = movies.data.results
    });
  }, [payload?.page]);
  return getMovies;
}
