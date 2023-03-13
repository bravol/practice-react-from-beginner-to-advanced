import React, { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Hero from "./hero/Hero";

import { ThemeContextProvider } from "./context/themeContext";

//1. create the context in a separate file
//2. Provide the context to the components
//3. Use the context

const DarkModeToggle = () => {
  return (
    <ThemeContextProvider>
      <div className="main">
        <Header />
        <Hero />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
};

export default DarkModeToggle;
