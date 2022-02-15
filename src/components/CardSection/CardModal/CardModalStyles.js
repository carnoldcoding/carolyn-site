import styled from 'styled-components'
import {css} from 'styled-components'

export const ModalContainer = styled.div`
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: all .5s ease;
    transform-origin: top;


    /*
        ==Opening Animations==
    */
    transform: ${props=>props.isOpen ? css`scaleY(1)` : css`scaleY(0)`};
    opacity: ${props=>props.isOpen ? 1 : 0};
`

export const ModalWrapper = styled.div`
    height: 40vh;
    width: 40vw;
    
    background: rgb(0, 50, 100, .95);
    color: white;
    border: 2px solid orange;
    padding: 1rem;
    border-radius: 1rem;

    @media screen and (max-width: 800px){
        height: 40vh;
        width: 80%;
    }
`

export const ModalHeaderWrapper = styled.div`

`

export const ModalHeader = styled.div`

`

export const ModalSubtitleWrapper = styled.div`

`

export const ModalSubtitle = styled.div`

`
