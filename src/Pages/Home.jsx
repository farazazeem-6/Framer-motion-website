import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import React, { Fragment } from "react";
import Skill from "../components/Skills/Skill";
import Project from "../components/Projectss/Project";
import Testimonials from "../components/Testimonials/Testimonials";
import { Contact } from "lucide-react";
import ScrollDirectionMarquee from "../components/TextMarqueeComp/TextMarquee";
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <ScrollDirectionMarquee/>
      <Skill/>
      <Project/>
    </Fragment>
  );
}

export default Home;
