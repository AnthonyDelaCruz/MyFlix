import React from "react";
import { Jumbotron, Footer, Accordion, HomeHero } from "components";

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <Jumbotron />
      <Accordion />
      <Footer />
    </div>
  );
};

export default HomePage;
