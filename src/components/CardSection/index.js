import React from 'react'
import {
    Container,
    CardsWrapper
} from  './CardSectionStyles'
import Card from './Card'
import { card1, card2, card3, card4 } from './data'

const CardSection = () => {
  return (
    <>
    <Container>
        <CardsWrapper>
          <Card {...card1}/>
          <Card {...card2}/>
          <Card {...card3}/>
          <Card {...card4}/>
        </CardsWrapper>
    </Container>
    </>
  )
}

export default CardSection