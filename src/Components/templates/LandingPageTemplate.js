import React from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/EighthSection/EighthSection";

export const LandingPageTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
