import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage, SignInPage, SignupPage, ErrorPage } from "pages";

import { useFetchMoviedata } from "./hooks";

function App() {
  // const [popularMovies, loadingPopular, popularError] = useFetchMoviedata(
  //   "popular"
  // );

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/signin" component={SignInPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
