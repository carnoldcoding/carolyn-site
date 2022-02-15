import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;

    height: 50vh;
    background: linear-gradient(var(--blue), var(--lightblue));

    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`

export const CardsWrapper = styled.div`

`