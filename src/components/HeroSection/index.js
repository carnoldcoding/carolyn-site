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
        <Button>Get Started</Button>
      </ButtonWrapper>
    </HeroContainer>
    </>
  )
}

export default HeroSection