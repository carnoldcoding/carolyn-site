import { keyframes } from "styled-components"
import styled from 'styled-components'
/*
    ==Animations==
*/
const fadeDown = keyframes`
    100%{
        transform: translateY(0);
        opacity: 1;
    }
`

/*
    ==Divs==
*/
export const HeroContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const ImageWrapper = styled.div`
    margin-top: 5rem;
    height: 50%;
    width: 70%;
    display: flex;
    @media screen and (max-width: 800px){
        width: 100%;
        height: 30%;
        margin-top: 0;
    }

    /* border: 1px solid black;
    background: lightblue; */

    animation: ${fadeDown} 1s ease forwards;
    opacity: 0;
    transform: translateY(-20vh);
`

export const Image = styled.img`
    object-fit: contain;
    height: 100%;
    width: 100%;
`