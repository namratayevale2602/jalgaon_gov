import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { LanguageToggle } from "../components/LanguageToggle";

function Layout() {
  return (
    <>
      <Navbar />
      <LanguageToggle />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
