import { keyframes } from "styled-components"
import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
/*
    ==Animations==
*/
const fadeDown = keyframes`
    100%{
        transform: translateY(0);
        opacity: 1;
    }
`

const fadeUp = keyframes`
    100%{
        transform: translateY(0);
        opacity: 1;
    }
`

const grow = keyframes`
    100%{
        transform: scaleX(1);
    }
`

/*
    ==Divs==
*/
export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media screen and (max-width: 800px){
        height: 50vh;
    }
`

export const ImageWrapper = styled.div`
    margin-top: 5rem;
    height: 50%;
    width: 70%;
    display: flex;
    @media screen and (max-width: 800px){
        width: 100%;
        height: 30%;
        margin-top: 2rem;
    }


    animation: ${fadeDown} 1s ease forwards;
    opacity: 0;
    transform: translateY(-20vh);
`

export const Image = styled.img`
    object-fit: contain;
    height: 100%;
    width: 100%;
`

export const ButtonWrapper = styled.div`
    font-size: 2rem;
    background: var(--blue);
    color: white;
    padding: 1rem;
    border-radius: 1rem;

    @media screen and (max-width: 800px){
        font-size: 1.3rem;
    }

    transition: all .2s ease;

    :hover{
        transform: scale(1.05);
        cursor: pointer;
        background: var(--lightblue);
    }
    
    transform: translateY(10vh);
    opacity: 0;
    animation:${fadeUp} 1s ease 2s forwards;
`

export const Button = styled(LinkS)`

`

export const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    width: 100%;
    color: white;
    background: var(--blue);
    
    transform: scaleX(0);
    transform-origin: left;
    animation: ${grow} 1s ease forwards 1s;
`

export const Banner = styled.div`
    font-size: 2.2rem;
    @media screen and (max-width: 800px){
        font-size: 1rem;
    }
`