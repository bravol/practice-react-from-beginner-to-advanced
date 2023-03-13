import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import "./Footer.css";

const Footer = () => {
  //3. Use the context
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="--flex-center" data-theme={theme}>
      <p>Copyright &copy; 2023</p>
    </footer>
  );
};

export default Footer;
