import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage, SignInPage, SignupPage, ErrorPage } from "pages";
import { firebaseApp } from "./firebase";
import { useFetchMoviedata } from "./hooks";

export const FirebaseContext = createContext();

function App() {
  // const [popularMovies, loadingPopular, popularError] = useFetchMoviedata(
  //   "popular"
  // );

  return (
    <FirebaseContext.Provider value={{ firebase: firebaseApp }}>
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
    </FirebaseContext.Provider>
  );
}

export default App;
