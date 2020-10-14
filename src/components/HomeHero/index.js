import React from "react";
import Hero from "./HomeHero";
import { MembershipForm, HomeNav, HeroContainer } from "components";

const HomeHero = () => (
  <HeroContainer>
    <HomeNav />
    <Hero.Content>
      <Hero.Header>Unlimited movies, TV shows, and more.</Hero.Header>
      <Hero.Subheader>Watch anywhere. Cancel anytime.</Hero.Subheader>
      <div className="spacer" />
      <MembershipForm />
    </Hero.Content>
  </HeroContainer>
);

export default HomeHero;
