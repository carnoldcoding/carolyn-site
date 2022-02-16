import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 100%;

    transform: translateY(40vh);
    background: linear-gradient(transparent, rgb(0, 36, 77), black);

    transition: .5s all ease-out;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
    height: 40vh;
    width: 15vw;
    color: white;

    background-image: url(${props=>props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgb(40, 130, 200);
    border-radius: 1rem;
    box-shadow: 0 0 5px 1px black;

    @media screen and (max-width: 800px){
        width: 80vw;
        height: 50vh;
    }

    :hover{
        box-shadow: 0 0 10px 1px black;
        ${CardWrapper}{
            transform: translateY(0);
        }
        cursor: pointer;
    }

    overflow: hidden;
`

export const CardTitleWrapper = styled.div`
    display: flex;
`

export const CardTitle = styled.div`
    font-size: var(--header);
`

export const CardSubtitle = styled.div`

`

export const CardButtonWrapper = styled.div`
    display: flex;
    justify-content: center;

    color: black;
`

export const CardButton = styled.div`
    border-radius: 1rem;
    background: orange;
    padding: 1rem;

    transition: all .2s ease;
    :hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`