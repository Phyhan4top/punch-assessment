import React from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/EighthSection/Footer.js";

export const LandingPageTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
