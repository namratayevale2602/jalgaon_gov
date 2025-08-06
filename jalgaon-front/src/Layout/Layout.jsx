import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { LanguageToggle } from "../components/LanguageToggle";
import { LanguageProvider } from "../contexts/LanguageContext";

function Layout() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <LanguageToggle />
        <Outlet />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default Layout;
