import React from "react";
import Jumbotron from "./Jumbotron";

import jumboTronInfo from "static/fixtures/jumbotronInfo.json";

const JumbotronContainer = () => (
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
              justifyContent={i % 2 !== 0 ? "center" : "flex-start"}
            >
              <Jumbotron.Image src={img_path} alt={header} />
            </Jumbotron.Pane>
          </Jumbotron.Item>
          <div className="divider" />
        </>
      ))}
    </Jumbotron.Content>
  </Jumbotron>
);

export default JumbotronContainer;
