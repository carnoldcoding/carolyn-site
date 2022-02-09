import React from 'react'
import {
  NavContainer,
  LogoWrapper,
  Logo,
  ItemsWrapper,
  NavLink,
} from './NavbarStyles'


const Navbar = ({toggle, isOpen}) => {
  console.log({isOpen});
  return (
    <>
        <NavContainer isOpen={isOpen}>
            <LogoWrapper>
                <Logo/>
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