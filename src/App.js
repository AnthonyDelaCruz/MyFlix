import React, { useEffect } from "react";

import { Jumbotron, Footer, Accordion } from "components";

import { useFetchMoviedata } from "./hooks";

function App() {
  // const [popularMovies, loadingPopular, popularError] = useFetchMoviedata(
  //   "popular"
  // );

  return (
    <div className="App">
      <Jumbotron />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
