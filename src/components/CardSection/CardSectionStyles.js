import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;

    background: linear-gradient(var(--blue), var(--lightblue));
`

export const CardsWrapper = styled.div`
    display: flex;
    gap: 2rem;
    margin: 2rem 0;

    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`