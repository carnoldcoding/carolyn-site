import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    ContactWrapper,
    InfoWrapper,
    InfoHeader,
    Info,
    IconsWrapper,
    Icon,
    ClientListWrapper,
    ClientListButton
} from './FooterStyles'

import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import FooterModal from './FooterModal';
import { useState } from 'react';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
        <FooterModal isOpen={isOpen} toggle={toggle}/>
        <FooterContainer>
            <FooterWrapper>
                <ContactWrapper>
                    <InfoWrapper>
                        <InfoHeader>
                            Contact
                        </InfoHeader>
                        <Info>
                            Sharaway Strategic Development Counseling
                        </Info>
                        <Info>
                            Carolyn Sharaway | 917.518.4988
                        </Info>
                    </InfoWrapper>
                    <IconsWrapper>
                        <Icon><FaFacebook /></Icon>
                        <Icon><FaLinkedin /></Icon>
                        <Icon><FaTwitter /></Icon>
                        <Icon><FaEnvelope /></Icon>
                    </IconsWrapper>
                    <ClientListWrapper>
                        <ClientListButton onClick={toggle}>
                            Client List
                        </ClientListButton>
                    </ClientListWrapper>
                </ContactWrapper>
            </FooterWrapper>
        </FooterContainer>
    </>
  )
}

export default Footer