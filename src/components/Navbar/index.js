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
                <NavLink animate={true} delay={"0s"}> About </NavLink>
                <NavLink animate={true} delay={".75s"}> Services </NavLink>
                <NavLink animate={true} delay={"1.5s"}> Contact </NavLink>
            </ItemsWrapper>
        </NavContainer>
    </>
  )
}

export default Navbar