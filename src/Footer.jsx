// contenant 2 links : Mentions légales , Contact
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <link to="/mentions-legales">Mentions légales</link>
      <link to="/contact">Contact</link>
      <p>&copy; 2024</p>
    </footer>
  );
};

export default Footer;
