import React from 'react'
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import CardSection from '../../components/CardSection';
import {information} from '../../components/AboutSection/data'
const LandingPage = () => {
  return (
      <>
        <HeroSection/>
        <AboutSection/>
        <CardSection {...information}/>
      </>
  )
}

export default LandingPage