import React from 'react'
import {
    Container,
    CardsWrapper
} from  './CardSectionStyles'
import Card from './Card'
import { card1, card2, card3, card4 } from './data'
import {useInView} from 'react-intersection-observer'


const CardSection = () => {
  const { ref, inView } = useInView({
    threshold: .2
});

  return (
    <>
    <Container>
        <CardsWrapper ref={ref}>
          <Card {...card1} inView={inView}/>
          <Card {...card2} inView={inView}/>
          <Card {...card3} inView={inView}/>
          <Card {...card4} inView={inView}/>
        </CardsWrapper>
    </Container>
    </>
  )
}

export default CardSection