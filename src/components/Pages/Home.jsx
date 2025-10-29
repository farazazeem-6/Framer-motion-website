import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import React, { Fragment } from "react";
import Skill from "../Skills/Skill";
import Project from "../Projectss/Project";
import Testimonials from "../Testimonials/Testimonials";
import { Contact } from "lucide-react";
import ScrollDirectionMarquee from "../TextMarqueeComp/TextMarquee";

function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <ScrollDirectionMarquee/>
    </Fragment>
  );
}

export default Home;
