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
          <MobileItem to="/">About</MobileItem>
          <MobileItem to="/coaching">Coaching</MobileItem>
          <MobileItem to="/contact">Contact</MobileItem>
        </MobileItemWrapper>
      </SidebarWrapper>
    </MobileContainer>
    <MobileBars onClick={toggle}>{isOpen ? <FaTimes/> : <FaBars/>}</MobileBars>
    </>
  )
}

export default MobileNav