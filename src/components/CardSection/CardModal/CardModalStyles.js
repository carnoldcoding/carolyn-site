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
    height: 60vh;
    overflow: auto;
    
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
        height: 70%;
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
    overflow: auto;

    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: orange; 
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #ffc800; 
    }

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