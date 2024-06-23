import React from 'react'
import { Header } from './Components/molecules/Header/Header'
import { FirstSection } from './Components/molecules/sections/firstSection/FirstSection'
import { SecondSection } from './Components/molecules/sections/secondSection/SecondSection'
import { ThirdSection } from './Components/molecules/sections/thirdSection/ThirdSection'
import { FourSection } from './Components/molecules/sections/fourthSection/FourSection'
import { FifthSection } from './Components/molecules/sections/FifthSection/FifthSection'
import { SeventSection } from './Components/molecules/sections/SeventSection/SeventSection'
import { Footer } from './Components/molecules/sections/EighthSection/EighthSection'
import { SixthSection } from './Components/molecules/sections/SixthSection/SixthSection'

const App = () => {
  return (
    <div>
      <Header />
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventSection/>
      <Footer/>
    </div>
  )
}

export default App
