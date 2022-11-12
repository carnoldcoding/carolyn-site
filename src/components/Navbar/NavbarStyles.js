import { css, keyframes } from "styled-components"
import styled from 'styled-components'
import logo from '../../assets/nav_logo_sharaway.png'
import logo_mobile from '../../assets/nav_logo_sharaway_mobile.png'

import {NavLink as Link} from 'react-router-dom'
import {Link as LinkS } from 'react-scroll'

//==Animations==

const fadeDown = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

//==Divs==
export const NavContainer = styled.nav`
    z-index: 2;
    display: flex;
    opacity: ${props=>props.isOpen ? 0 : 1};

    height: 5vh;
    background: var(--nav-background);
    position: sticky;
    top: 0;
    left: 0;

    padding: 1rem;
    box-shadow: 0 1px 3px 1px #333;

    transition: all .2s ease;
`

export const LogoWrapper = styled(LinkS)`
    flex: 1 1 20%;
    justify-content: flex-start;
`

export const Logo = styled.div`
    background: url(${logo});
    height: 100%;
    width: 10em;
    min-width: 10em;
    background-size: contain;
    background-repeat: no-repeat;

    transition: all .2s ease;

    :hover{
        cursor: pointer;
        transform: scale(1.05);
    }

    @media screen and (max-width: 800px){
        background-image: url(${logo_mobile});
    }
`

export const ItemsWrapper = styled.div`
    display: flex;
    flex: 1 1 90%;
    justify-content: flex-end;
    align-items: center;
    gap: 3rem;
    font-size: 1.3rem;
    margin-right: 20px;


    @media screen and (max-width: 800px){
        transform: scaleX(0);
    }
`

export const NavLink = styled(Link)`
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
    props.animate ? css`${fadeDown} 1.5s ease forwards`
    : "none"}
`

export const NavLinkS = styled(LinkS)`
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
    props.animate ? css`${fadeDown} 1.5s ease forwards`
    : "none"}
`

export const NavClient = styled.div`
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
    props.animate ? css`${fadeDown} 1.5s ease forwards`
    : "none"}
`