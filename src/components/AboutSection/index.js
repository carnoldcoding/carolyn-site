import React from 'react'
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
        threshold: .1
    });

  return (
    <AboutContainer id = "about">
        <AboutWrapper
            ref={ref}
            animate={inView ? true : false}>
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
                    animate={inView ? true : false}>
                        {title}
                    </Title>
                </TitleWrapper>
                <InfoWrapper>
                    <Info ref={ref} animate={inView ? true : false}>
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