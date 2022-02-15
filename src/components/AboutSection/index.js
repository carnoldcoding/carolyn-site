import React from 'react'
import { useState, useEffect } from 'react'
import {
    AboutContainer,
    AboutWrapper,
    ImageWrapper,
    Image,
    ImageText,
    ContentWrapper,
    TitleWrapper,
    Title,
    InfoWrapper,
    Info
} from './AboutStyles'
import {useInView} from 'react-intersection-observer'
import pfp from '../../assets/pfp.jpg'

const About = ({p1, p2, p3, imgTxt, title}) => {
    const { ref, inView } = useInView({
        threshold: .4
    });

    const [animated, setAnimated] = useState(false);

    const animationState = () => {
        console.log("here");
        setAnimated(false);
    }

    useEffect = (() => {
        console.log("here");
    })

  return (
    <AboutContainer id = "about">
        <AboutWrapper
            ref={ref}
            animate={inView}>
            <ImageWrapper>
                <Image src={pfp}>
                </Image>
                <ImageText>
                    {imgTxt}
                </ImageText>
            </ImageWrapper>
            <ContentWrapper>
                <TitleWrapper>
                    <Title
                    ref={ref}
                    animate={inView}>
                        {title}
                    </Title>
                </TitleWrapper>
                <InfoWrapper>
                    <Info ref={ref} animate={inView} >
                        {p1}<br /><br />
                        {p2}<br /><br />
                        {p3}<br /><br />
                    </Info>
                </InfoWrapper>
            </ContentWrapper>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About