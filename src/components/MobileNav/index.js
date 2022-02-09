import React from 'react'
import {
  MobileContainer,
  MobileItemWrapper,
  MobileItem,
  SidebarWrapper,
  MobileBars
} from './MobileNavStyles'
import {FaBars, FaTimes} from 'react-icons/fa';
import {useState} from 'react'

const MobileNav = ({toggle, isOpen}) => {

  const button = () => {

  }

  return (
    <>
    <MobileContainer isOpen={isOpen}>
      <SidebarWrapper>
        <MobileItemWrapper>
          <MobileItem>About</MobileItem>
          <MobileItem>Services</MobileItem>
          <MobileItem>Contact</MobileItem>
        </MobileItemWrapper>
      </SidebarWrapper>
    </MobileContainer>
    <MobileBars onClick={toggle}>{isOpen ? <FaTimes/> : <FaBars/>}</MobileBars>
    </>
  )
}

export default MobileNav