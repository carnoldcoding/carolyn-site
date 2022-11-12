import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    ContactWrapper,
    InfoWrapper,
    InfoHeader,
    Info,
    IconsWrapper,
    Icon
} from './FooterStyles'

import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
        <FooterContainer id="contact">
            <FooterWrapper>
                <ContactWrapper>
                    <InfoWrapper>
                        <InfoHeader>
                            Contact
                        </InfoHeader>
                        <Info>
                            Sharaway Strategic Development Consulting
                        </Info>
                        <Info>
                            <a href="mailto:carolyn@sharawayconsulting.com">Carolyn@SharawayConsulting.com</a>
                        </Info>
                        <Info>
                            Carolyn Sharaway | 917.518.4988
                        </Info>
                    </InfoWrapper>
                    <IconsWrapper>
                        <Icon href="https://www.facebook.com/sharawaystrategicconsulting" target="_blank"><FaFacebook /></Icon>
                        <Icon href="https://www.linkedin.com/company/sharaway-strategic-development-consulting/" target="_blank"><FaLinkedin /></Icon>
                        <Icon href="mailto:carolyn@sharawayconsulting.com"><FaEnvelope /></Icon>
                    </IconsWrapper>
                </ContactWrapper>
            </FooterWrapper>
        </FooterContainer>
    </>
  )
}

export default Footer
