import styled from "styled-components"
import css from "styled-components"
import {Link} from 'react-scroll'

export const MobileContainer = styled.div`
    display: flex;
    z-index: 3;
    position: fixed;
    top: 0;
    right: 0;

    height: 100%;
    width: 100%;
    align-items: flex-end;
    flex-direction: column;
    
    transition: all .2s ease;
    transform: ${props=>props.isOpen ? "scaleX(1)" : "scaleX(0)"};
    transform-origin: right;

    font-size: 2rem;
}

`
export const SidebarWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: var(--nav-background);
    box-shadow: -3px 0px 5px 1px grey;

    display: flex;
    justify-content: center;
`

export const MobileItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
    gap: 3rem;
`

export const MobileItem = styled(Link)`
    text-decoration: none;
    color: black;
`

export const MobileBars = styled.div`
    display: none;
    @media screen and (max-width: 800px){
        position: fixed;
        top: 0;
        right: 0;
        z-index: 4;
        display: block;
        transform: translate(-100%, 50%);
        font-size: 2rem;
        cursor: pointer;
        color: black;
    }
`