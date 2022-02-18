import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: flex;
    background: var(--nav-background);
    box-shadow: 0 0 5px 1px black;
    padding: 1rem;
`

export const FooterWrapper = styled.div`
    display: flex;
    flex: 1 1 100%;
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`

export const ClientListWrapper = styled.div`

`

export const ClientListButton = styled.div`
    padding: .25rem 1rem;
    border-radius: 1rem;
    background: black;
    color: var(--nav-background);
    transition: all .2s ease;

    :hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`

export const ContactWrapper = styled.div`
    display: flex;
    flex: 1 1 50%;
    flex-direction: column;
    align-items: center;

    padding: 0 1rem;
    line-height: 3rem;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InfoHeader = styled.div`
    font-size: 2rem;
`

export const Info = styled.div`

`

export const IconsWrapper = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 2rem;
`

export const Icon = styled.div`
    transition: all .2s ease;
    :hover{
        color: var(--lightblue);
        cursor: pointer;
    }
`