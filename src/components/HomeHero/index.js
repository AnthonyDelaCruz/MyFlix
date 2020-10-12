import React from "react";
import Hero from "./HomeHero";
import { MembershipForm } from "components";

const HomeHero = () => (
  <Hero>
    <Hero.Content>
      <Hero.Header>Unlimited movies, TV shows, and more.</Hero.Header>
      <Hero.Subheader>Watch anywhere. Cancel anytime.</Hero.Subheader>
      <div className="spacer" />
      <MembershipForm />
    </Hero.Content>
  </Hero>
);

export default HomeHero;
