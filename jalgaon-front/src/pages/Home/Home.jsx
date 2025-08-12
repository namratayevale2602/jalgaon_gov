import React from "react";
import HeroCarousel from "./Banner";
// import NoticesSection from "./Scrolling";
// import { RawContentDisplay } from "./District";
import AboutDistrict from "./AboutDistrict";
import RecentBlogs from "./RecentBlogs";
import AboutDPC from "./AboutDPC";
import LatestUpdates from "./LatestUpdates";
import QuickLinks from "./QuickLinks";
import Services from "./Services";
// import GRDetailSection from "./GRDetailSection";

function Home() {
  return (
    <div>
      <HeroCarousel />
      {/* <RawContentDisplay /> */}
      <LatestUpdates />
      <AboutDistrict />
      <QuickLinks />
      <AboutDPC />
      <Services />
      {/* <GRDetailSection /> */}
      <RecentBlogs />
    </div>
  );
}

export default Home;
