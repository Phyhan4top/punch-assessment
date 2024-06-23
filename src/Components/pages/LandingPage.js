import React from 'react'
import { FirstSection } from '../organisms/firstSection/FirstSection';
import { SecondSection } from '../organisms/secondSection/SecondSection';
import { ThirdSection } from '../organisms/thirdSection/ThirdSection';
import { FourSection} from '../organisms/fourthSection/FourSection';
import { FifthSection } from "../organisms/FifthSection/FifthSection";
import { SixthSection} from '../organisms/SixthSection/SixthSection';
import { SeventhSection } from "../organisms/SeventSection/SeventSection"
export const LandingPage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </div>
  );
}
