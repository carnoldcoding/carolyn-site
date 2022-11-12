import React from 'react'
import ClientModal from './ClientModal'
import {
  NavContainer,
  LogoWrapper,
  Logo,
  ItemsWrapper,
  NavLinkS,
  NavClient
} from './NavbarStyles'


const Navbar = ({toggle, isOpen}) => {
  console.log({isOpen});
  return (
    <>
        <ClientModal isOpen={isOpen} toggle={toggle}/>
        <NavContainer isOpen={isOpen}>
            <LogoWrapper to="hero" duration={1000} smooth={true} spy={true}>
                <Logo/>
            </LogoWrapper>
            <ItemsWrapper>
                <NavLinkS to="about" animate={true} delay={"0s"} duration={1000} smooth={true} spy={true}> About </NavLinkS>
                <NavLinkS to ="services" animate={true} delay={"1.5s"} duration={1000} smooth={true} spy={true}> Services </NavLinkS>
                <NavLinkS to="contact" animate={true} delay={"1.5s"} duration={1000} smooth={true} spy={true}> Contact </NavLinkS>
                <NavClient animate={true}>Client List</NavClient>
            </ItemsWrapper>
        </NavContainer>
    </>
  )
}

export default Navbar