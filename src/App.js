import React from "react";
import { Header } from "./Components/molecules/Header/Header";
import { Footer } from "./Components/molecules/sections/EighthSection/EighthSection";
import { LandingPage } from "./Components/pages/LandingPage";

const App = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
