import React from "react";
import { LandingPage } from "./Components/pages/LandingPage";
import { LandingPageTemplate } from "./Components/templates/LandingPageTemplate";

const App = () => {
  return (
    <LandingPageTemplate>
      <LandingPage />
    </LandingPageTemplate>
  );
};

export default App;
