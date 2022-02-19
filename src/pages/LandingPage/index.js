import React from 'react'
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import CardSection from '../../components/CardSection';
import ServiceSection from '../../components/ServicesSection';
import {services} from '../../components/ServicesSection/data';
import {information} from '../../components/AboutSection/data';
const LandingPage = () => {
  return (
      <>
        <HeroSection/>
        <AboutSection/>
        <CardSection {...information}/>
        <ServiceSection {...services}/>
      </>
  )
}

export default LandingPage