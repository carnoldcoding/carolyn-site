import styled from 'styled-components'
import {keyframes, css} from 'styled-components'
import mountain from '../../assets/clear_mountains.jpeg'

/*
 ==Animations==
*/
export const nothing = keyframes`
   
`
export const fadeLeft = keyframes`
    0%{
        opacity:0;
        transform: translateX(10vw);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
`
export const fadeRight = keyframes`
    0%{
        opacity:0;
        transform: translateX(-20vw);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
`

export const fadeIn = keyframes`
    100%{
        opacity: 1;
    }
`
/*
    ==Divs==
*/
export const AboutContainer = styled.div`
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    padding: 5rem 10rem;

    @media screen and (max-width: 800px){
        padding: 1rem
    }

    background-image: url(${mountain});
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
`

export const AboutWrapper = styled.div`
    display: flex;

    background: var(--tblue);
    border-radius: 1rem;
    padding: 1rem;

    box-shadow: 0 0 10px 1px black;


    
    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
        padding: 3rem 1rem;
        gap: 1rem;
    }

    animation-duration: var(--duration);
    animation-name: ${props=>props.animate ? css`${fadeRight}` : null};
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    opacity: 0;
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

    border-radius: 1rem;
    padding: 1rem;
`

export const TitleWrapper = styled.div`
    display: flex;
    margin-bottom: 1rem;

    @media screen and (max-width: 800px){
        justify-content: center;
    }
`

export const Title = styled.div`
    opacity: 0;

    font-size: 3rem;
    
    animation-duration: var(--duration);
    animation-delay: var(--delay);
    animation-name: ${props=>props.animate ? css`${fadeLeft}` : null};
    animation-fill-mode: forwards;
    animation-timing-function: ease;

    @media screen and (max-width: 800px){
        font-size: 2.3rem;
    }
`

export const InfoWrapper = styled.div`
    line-height: 1.8rem;
`

export const Info = styled.div`
    opacity: 0;
    animation-duration: var(--duration);
    animation-delay: calc(var(--delay) * 2);
    animation-name: ${props=>props.animate ? css`${fadeLeft}` : null};
    animation-fill-mode: forwards;
    animation-timing-function: ease;
`