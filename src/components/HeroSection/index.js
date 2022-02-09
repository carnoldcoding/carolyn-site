import React from 'react'
import {
    HeroContainer,
    FixedBackground,
    Scrollbar,
    ScrollbarText
} from './HeroStyles'

import bg1 from '../../assets/star_mountains.jpeg'
import bg2 from '../../assets/clear_mountains.jpeg'

const HeroSection = () => {
  return (
    <>
    <HeroContainer>
        <FixedBackground image={bg1}></FixedBackground>
        <Scrollbar>
            <ScrollbarText>
            DEVELOP, GROW, & SUSTAIN YOUR NONPROFIT
            </ScrollbarText>
        </Scrollbar>
        <FixedBackground image={bg2}></FixedBackground>
    </HeroContainer>
    </>
  )
}

export default HeroSection