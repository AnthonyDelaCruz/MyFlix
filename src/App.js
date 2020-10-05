import React, { useEffect } from "react";

import Jumbotron from "components/Jumbotron";
import Footer from "components/Footer";
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
