import React from 'react'
import { TestimonialsSection} from '../organisms/thirdSection/TestimonialsSection';
import { ReasonsSection} from '../organisms/SixthSection/ReasonsSection';
import { HeroSection } from '../organisms/HeroSection/HeroSection';
import { FeaturesSection } from '../organisms/FeaturesSection/FeaturesSection';
import { ScreeningSection } from '../organisms/ScreeningSection/ScreeningSection';
import { CallToActionSection } from '../organisms/CallToActionSection/CallToActionSection';
import { FaqSection } from '../organisms/FaqSection/FaqSection';
export const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturesSection />
      <TestimonialsSection/>
      <ScreeningSection/>
      <CallToActionSection />
      <FaqSection/>
      <ReasonsSection/>
    </div>
  );
}
