import { css, keyframes } from "styled-components"
import styled from 'styled-components'
import logo from '../../assets/nav_logo_sharaway.png'

//==Animations==

const fadeDown = keyframes`
    0%{
        transform: translateY(-5vh);
        opacity: 0;
    }
    100%{
        transform: translateY(1);
        opacity: 1;
    }
`

//==Divs==
export const NavContainer = styled.nav`
    display: flex;
    height: 5vh;
    background: var(--nav-background);
    position: sticky;

    padding: 1rem 5rem;
    box-shadow: 0 1px 3px 1px #333;

    @media screen and (max-width: 800px){
        padding: 1rem;
    }
`

export const LogoWrapper = styled.div`
    flex: 1 1 20%;
    justify-content: flex-start;
`

export const Logo = styled.div`
    background: url(${logo});
    height: 100%;
    min-width: 10em;
    background-size: contain;
    background-repeat: no-repeat;
`

export const ItemsWrapper = styled.div`
    display: flex;
    flex: 1 1 90%;
    justify-content: flex-end;
    align-items: center;
    gap: 3rem;
    font-size: 1.3rem;


    @media screen and (max-width: 800px){
        transform: scaleX(0);
    }
`

export const NavLink = styled.div`
    text-decoration: none;
    color: black;
    transition: all .2s ease;
    opacity: 0;

    :hover{
        cursor: pointer;
        color: var(--accent);
    }

    animation: ${
    props => 
    props.animate ? css`${fadeDown} .5s ease ${props.delay} forwards`
    : "none"}
`

