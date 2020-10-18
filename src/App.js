import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ROUTES from "routes";
import { HomePage, SignInPage, SignupPage, ErrorPage } from "pages";
import { firebaseApp } from "./firebase";
import { useFetchMoviedata } from "./hooks";

export const FirebaseContext = createContext();

function App() {
  // const [popularMovies, loadingPopular, popularError] = useFetchMoviedata(
  //   "popular"
  // );

  return (
    <div className="App">
      <FirebaseContext.Provider value={{ firebase: firebaseApp }}>
        <Router>
          <Switch>
            <Route path={ROUTES.HOME} exact component={HomePage} />
            <Route path={ROUTES.SIGNUP} component={SignupPage} />
            <Route path={ROUTES.SIGNIN} component={SignInPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </FirebaseContext.Provider>
    </div>
  );
}

export default App;
