import { FaBalanceScale } from 'react-icons/fa'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    transform: ${props=>props.isOpen ? "scaleY(1)" : "scaleY(0)"};
    transition: all .5s ease;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--nav-background);
    border-radius: 1rem;
    padding: 1rem;
    height: 60vh;
    box-shadow: 
    0 0 5px 1px black 
`

export const IconRow = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
`

export const IconColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Icon = styled.img`
    max-height: 20vh;
    max-width: 10vw;
    height: auto;
    width: auto;
`

export const IconWrapper = styled.div`

`

export const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const CloseButton = styled.div`
    font-size: 1.5rem;

    transition: all .2s ease;
    :hover{
        color: grey;
        cursor: pointer;
    }
`