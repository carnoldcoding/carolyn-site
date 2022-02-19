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
    }
`

export const Header = styled.div`

`

export const ContentWrapper = styled.div`
    display: flex;
    width: 85%;
    padding: 1rem;
    background: rgb(163, 160, 153);

    transition: all .2s ease;
    
    transform-origin: top;
    transform: ${props=>props.isOpen ? "scaleY(1)" : "scaleY(0)"};
`

export const Content = styled.div`

`