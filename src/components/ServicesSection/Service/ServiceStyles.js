import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

`

export const Wrapper = styled.div`
    flex: 1 1 100%;
    flex-direction: column;
    align-items: center;

    display: flex;

`

export const HeaderWrapper = styled.div`
    display: flex;
    z-index: 1;
    justify-content: center;
    width: 95%;
    font-size: 1.3rem;
    background: var(--nav-background);
    border-radius: .25rem;
    padding: .5rem 0;
    

    transition: all .2s ease;
    :hover{
        cursor: pointer;
        transform: scale(1.02);
        box-shadow: 0 2px 3px 1px black;

    }
`

export const Header = styled.div`

`

export const ContentWrapper = styled.div`
    display: flex;
    z-index: 0;
    width: 85%;
    padding: 2rem;
    background: rgb(179, 175, 166);

    transition: all .2s ease;
    
    transform-origin: top;
    transform: ${props=>props.isOpen ? "scaleY(1)" : "scaleY(0)"};
    position: ${props=>props.isOpen ? "relative":"absolute"};
    border-radius: 0 0 1rem 1rem;

`

export const Content = styled.div`

`