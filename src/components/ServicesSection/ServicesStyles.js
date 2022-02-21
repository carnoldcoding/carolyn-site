import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background: linear-gradient(var(--lightblue), var(--blue));
`

export const Wrapper = styled.div`
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
`

export const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 1rem;
    width: 50vw;
    @media screen and (max-width: 800px){
        width: 90vw;
    }
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    z-index: 1;

    background:var(--nav-background);
    padding: .5rem 0;
    font-size: 2rem;
    border-radius: 1rem;
    width: 100%;
    


    transition: all .2s ease;

    :hover{
        cursor: pointer;
        transform: scale(1.05);
        box-shadow: 0 2px 3px 1px black;
    }
`

export const Header = styled.div`

`

export const ContentWrapper = styled.div`
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    background: rgb(201, 196, 187);

    padding: 1rem 0;
    gap: 1rem;
    
    transform-origin: top;
    transition: all .2s ease;
    transform: ${props=>props.isOpen ? "scaleY(1);" : "scaleY(0)"};
    border-radius: 0 0 1rem 1rem;

`

export const Content = styled.div`
    
`

