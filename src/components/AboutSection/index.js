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
import pfp from '../../assets/pfp.jpg'

const About = ({p1, p2, p3, imgTxt, title}) => {
  return (
    <AboutContainer>
        <AboutWrapper>
            <ImageWrapper>
                <Image src={pfp}>
                </Image>
                <ImageText>
                    {imgTxt}
                </ImageText>
            </ImageWrapper>
            <ContentWrapper>
                <TitleWrapper>
                    <Title>
                        {title}
                    </Title>
                </TitleWrapper>
                <InfoWrapper>
                    <Info>
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