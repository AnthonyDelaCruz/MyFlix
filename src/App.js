import React, { useEffect } from "react";

import { Jumbotron, Footer } from "components";

import { useFetchMoviedata } from "./hooks";

function App() {
  // const [popularMovies, loadingPopular, popularError] = useFetchMoviedata(
  //   "popular"
  // );

  return (
    <div className="App">
      <Jumbotron />
      <Footer />
    </div>
  );
}

export default App;
