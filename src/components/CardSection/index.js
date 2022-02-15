import React from 'react'
import {
    Container,
    CardsWrapper
} from  './CardSectionStyles'
import Card from './Card'
import { card1 } from './data'

const CardSection = () => {
  return (
    <>
    <Container>
        <CardsWrapper>
          <Card {...card1}/>
        </CardsWrapper>
    </Container>
    </>
  )
}

export default CardSection