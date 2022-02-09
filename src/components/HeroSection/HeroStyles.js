import styled from 'styled-components'

export const HeroContainer = styled.div`
    height:200vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FixedBackground = styled.div`
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
    background-image: url(${props=>props.image});
    background-repeat: no-repeat;
    background-size: cover;
`

export const Scrollbar = styled.div`
    z-index: 1;
    display: flex;
    height: 10vh;
    width: 100%;
    background: #0b68a5;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    padding: 1rem 0;
`

export const ScrollbarText = styled.div`
    color: white;

`