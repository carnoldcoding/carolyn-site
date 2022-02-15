import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    
    height: 40vh;
    width: 15vw;
    color: white;

    background: var(--tblue);

    border-radius: 1rem;
    box-shadow: 0 0 5px 1px black;

    @media screen and (max-width: 800px){
        width: 80vw;
        height: 50vh;
    }

    transition: all .2s ease;
    :hover{
        cursor: pointer;
        box-shadow: 0 0 10px 1px black;
        transform: scale(1.02);
    }
`

export const CardWrapper = styled.div`

`

export const CardTitle = styled.div`

`

export const CardSubtitle = styled.div`

`