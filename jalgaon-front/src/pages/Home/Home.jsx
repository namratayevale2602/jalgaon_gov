import React from "react";
import HeroCarousel from "./Banner";
// import NoticesSection from "./Scrolling";
import About from "./About";

function Home() {
  return (
    <div>
      <HeroCarousel />
      {/* <NoticesSection /> */}
      <About />
    </div>
  );
}

export default Home;
