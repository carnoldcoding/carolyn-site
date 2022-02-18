import styled from 'styled-components'
import {css} from 'styled-components'

export const ModalContainer = styled.div`
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: all .5s ease;


    /*
        ==Opening Animations==
    */
    transform: ${props=>props.isOpen ? css`scaleY(1)` : css`scaleY(0)`};
    opacity: ${props=>props.isOpen ? 1 : 0};
`

export const ModalWrapper = styled.div`
    width: 40vw;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background: rgb(0, 50, 100, .95);
    color: white;
    border: 2px solid orange;
    padding: 1rem;
    border-radius: 1rem;

    @media screen and (max-width: 800px){
        width: 80%;
    }
`

export const ModalHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2rem;
`

export const ModalHeader = styled.div`
    text-decoration: underline;
`

export const ModalSubtitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    line-height: 2rem;
`

export const ModalSubtitle = styled.div`

`

export const ModalButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;

`

export const ModalButton = styled.div`
    transition: all .2s ease;
    :hover{
            cursor: pointer;
            color: orange;
        }
`