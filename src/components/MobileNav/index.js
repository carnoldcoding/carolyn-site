import React from 'react'
import {
  MobileContainer,
  MobileItemWrapper,
  MobileItem,
  SidebarWrapper,
  MobileBars,
} from './MobileNavStyles'
import {FaBars, FaTimes} from 'react-icons/fa';

const MobileNav = ({toggle, isOpen}) => {

  return (
    <>
    <MobileContainer isOpen={isOpen}>
      <SidebarWrapper>
        <MobileItemWrapper>
          <MobileItem onClick={toggle} to="about" duration={1000} smooth={true} spy={true}>About</MobileItem>
          <MobileItem onClick={toggle} to="services" duration={1000} smooth={true} spy={true}>Services</MobileItem>
          <MobileItem onClick={toggle} to="contact" duration={1000} smooth={true} spy={true}>Contact</MobileItem>
        </MobileItemWrapper>
      </SidebarWrapper>
    </MobileContainer>
    <MobileBars onClick={toggle}>{isOpen ? <FaTimes/> : <FaBars/>}</MobileBars>
    </>
  )
}

export default MobileNav