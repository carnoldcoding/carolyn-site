import styled from 'styled-components'
import {keyframes} from 'styled-components'

export const AboutContainer = styled.div`
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    padding: 5rem 10rem;

    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
        padding: 3rem 1rem;
        gap: 1rem;
    }

    background: linear-gradient(var(--blue), var(--lightblue));
    color: white;

`

export const ImageWrapper = styled.div`
    display: flex;
    flex: 1 1 30%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 1rem;
`

export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 60%;
    border-radius: 100%;
    border: 2px solid var(--accent);
`

export const ImageText = styled.div`

`

export const ContentWrapper = styled.div`
    flex: 1 1 70%;
    height: 100%;
    width: 100%;

    background: var(--tblue);
    border-radius: 1rem;
    padding: 1rem;
`

export const TitleWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 800px){
        justify-content: center;
    }
`

export const Title = styled.div`
    font-size: 3rem;
    @media screen and (max-width: 800px){
        font-size: 2.3rem;
    }
`

export const InfoWrapper = styled.div`
    line-height: 1.8rem;
`

export const Info = styled.div`

`