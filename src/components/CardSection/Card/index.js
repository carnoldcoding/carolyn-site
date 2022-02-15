import React from 'react'
import {
    CardContainer,
    CardWrapper,
    CardTitle,
    CardSubtitle
} from './CardStyles'
import {useState} from 'react';

const Card = ({title, subtitle}) => {
    const [active, setActive] = useState(false);
    const toggle = () =>{setActive(!active); console.log("Working")}
  return (
    <>
    <CardContainer>
        <CardWrapper onClick={toggle}>
            <CardTitle>
                {title}
            </CardTitle>
            <CardSubtitle>
                {subtitle}
            </CardSubtitle>
        </CardWrapper>
    </CardContainer>
    </>
  )
}

export default Card