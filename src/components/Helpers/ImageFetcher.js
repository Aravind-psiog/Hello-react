import React from "react";

// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(
//   require.context("../../asset/ott/", false, /\.(png|jpe?g|svg|webp)$/)
// );

const ImageFetcher = () => {
  const imageMapper = (r) => {
    return r.keys().map(r);
  };
  return imageMapper(
    require.context("../../asset/ott/", false, /\.(png|jpe?g|svg|webp)$/)
  );
};

export default ImageFetcher;
