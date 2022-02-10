import React from 'react'
import {
    HeroContainer,
    ImageWrapper,
    Image
} from './HeroStyles'

import banner from '../../assets/logo.jpg'

const HeroSection = () => {
  return (
    <>
    <HeroContainer>
      <ImageWrapper>
        <Image src={banner}></Image>
      </ImageWrapper>
    </HeroContainer>
    </>
  )
}

export default HeroSection