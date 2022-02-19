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
                <NavLink to="/" animate={true} delay={"0s"}> About </NavLink>
                <NavLink to="/coaching" animate={true} delay={".75s"}> Coaching </NavLink>
                <NavLink to="/contact" animate={true} delay={"1.5s"}> Contact </NavLink>
            </ItemsWrapper>
        </NavContainer>
    </>
  )
}

export default Navbar