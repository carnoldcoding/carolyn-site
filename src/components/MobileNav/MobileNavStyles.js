import styled from "styled-components"
import css from "styled-components"

export const MobileContainer = styled.div`
    display: flex;
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;

    height: 100vh;
    width: 100vw;
    justify-content: flex-end;
    
    transition: all .2s ease;
    transform: ${props=>props.isOpen ? "scaleX(1)" : "scaleX(0)"};
    transform-origin: right;
}

`
export const SidebarWrapper = styled.div`
    height: 100vh;
    width: 50vw;
    background: var(--nav-background);
    box-shadow: -3px 0px 5px 1px grey;
`

export const MobileItemWrapper = styled.div`

`

export const MobileItem = styled.div`

`

export const MobileBars = styled.div`
    display: none;
    @media screen and (max-width: 800px){
        z-index: 3;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 2rem;
        cursor: pointer;
        color: black;
    }
`