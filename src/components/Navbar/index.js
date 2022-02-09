import React from 'react'
import {
  NavContainer,
  LogoWrapper,
  Logo,
  ItemsWrapper,
  NavLink
} from './NavbarStyles'
import logo from '../../assets/nav_logo_sharaway.png'


const Navbar = () => {
  return (
    <>
        <NavContainer>
            <LogoWrapper>
                <Logo src={logo}/>
            </LogoWrapper>
            <ItemsWrapper>
                <NavLink> About </NavLink>
                <NavLink> Services </NavLink>
                <NavLink> Contact </NavLink>
            </ItemsWrapper>
        </NavContainer>
    </>
  )
}

export default Navbar