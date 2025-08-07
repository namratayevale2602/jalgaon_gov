import React from "react";
import HeroCarousel from "./Banner";
// import NoticesSection from "./Scrolling";
import About from "./About";
// import { RawContentDisplay } from "./District";
import AboutDistrict from "./AboutDistrict";
import RecentBlogs from "./RecentBlogs";
function Home() {
  return (
    <div>
      <HeroCarousel />
      {/* <RawContentDisplay /> */}
      <AboutDistrict />
      <About />
      <RecentBlogs />
    </div>
  );
}

export default Home;
