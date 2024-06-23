import React from 'react'
import { FirstSection } from '../molecules/sections/firstSection/FirstSection';
import { SecondSection } from '../molecules/sections/secondSection/SecondSection';
import { ThirdSection } from '../molecules/sections/thirdSection/ThirdSection';
import { FourSection } from '../molecules/sections/fourthSection/FourSection';
import { FifthSection } from '../molecules/sections/FifthSection/FifthSection';
import { SixthSection } from '../molecules/sections/SixthSection/SixthSection';
import { SeventSection } from '../molecules/sections/SeventSection/SeventSection';

export const LandingPage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FifthSection />
      <SixthSection />
      <SeventSection />
    </div>
  );
}
