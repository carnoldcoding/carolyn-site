import React from 'react'
import {
    Container,
    CardsWrapper
} from  './CardSectionStyles'

import Card from './Card'

const CardSection = () => {
  return (
    <>
    <Container>
        <CardsWrapper>
          <Card />
        </CardsWrapper>
    </Container>
    </>
  )
}

export default CardSection