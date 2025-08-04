import React from "react";
import HeroCarousel from "./Banner";
// import NoticesSection from "./Scrolling";
import About from "./About";
import { RawContentDisplay } from "./District";
import AboutDistrict from "./AboutDistrict";
function Home() {
  return (
    <div>
      <HeroCarousel />
      <RawContentDisplay />
      <AboutDistrict />
      <About />
    </div>
  );
}

export default Home;
