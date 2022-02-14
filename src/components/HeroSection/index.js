import React from 'react'
import {useState} from 'react'
import {
    HeroContainer,
    ImageWrapper,
    Image,
    ButtonWrapper,
    Button
} from './HeroStyles'

import banner from '../../assets/logo.jpg'

const HeroSection = () => {
  return (
    <>
    <HeroContainer>
      <ImageWrapper>
        <Image src={banner}></Image>
      </ImageWrapper>
      <ButtonWrapper>
        <Button to="about" duration={1000} smooth={true} spy={true}>Get Started</Button>
      </ButtonWrapper>
    </HeroContainer>
    </>
  )
}

export default HeroSection