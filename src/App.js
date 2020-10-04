import React, { useEffect } from "react";
import { FaTv } from "react-icons/fa";

import Jumbotron from "components/jumbotron";
import { useFetchMoviedata } from "./hooks";
import jumboTronInfo from "static/fixtures/jumbotronInfo.json";

function App() {
  // const [popularMovies, loadingPopular, popularError] = useFetchMoviedata(
  //   "popular"
  // );

  return (
    <div className="App">
      <Jumbotron>
        <Jumbotron.Content>
          {jumboTronInfo.map(({ header, sub_header, img_path }, i) => (
            <>
              <Jumbotron.Item
                key={i}
                direction={i % 2 !== 0 ? "row-reverse" : "row"}
              >
                <Jumbotron.Pane
                  padding={i % 2 !== 0 ? "left" : "right"}
                  justifyContent={i % 2 !== 0 ? "flex-start" : "flex-end"}
                >
                  <div>
                    <Jumbotron.Title>{header}</Jumbotron.Title>
                    <Jumbotron.Subheader>{sub_header}</Jumbotron.Subheader>
                  </div>
                </Jumbotron.Pane>
                <Jumbotron.Pane
                  justifyContent={i % 2 !== 0 ? "flex-end" : "flex-start"}
                >
                  <Jumbotron.Image src={require(`${img_path}`)} alt={header} />
                </Jumbotron.Pane>
              </Jumbotron.Item>
              <div className="divider" />
            </>
          ))}
        </Jumbotron.Content>
      </Jumbotron>
    </div>
  );
}

export default App;
