import React from 'react'
import {
    CardContainer,
    CardWrapper,
    CardTitleWrapper,
    CardTitle,
    CardSubtitle,
    CardButtonWrapper,
    CardButton
} from './CardStyles'
import {useState} from 'react';
import CardModal from '../CardModal';


const Card = ({title, subtitle, modalHeader, modalContent, background, delay, inView}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)};
    
  return (
    <>
    <CardModal isOpen={isOpen} toggle={toggle} 
    modalHeader={modalHeader} modalContent={modalContent}/>

    <CardContainer background={background} delay={delay}
    animate={inView}>
        <CardTitleWrapper>
            <CardTitle>
                {title}
            </CardTitle>
        </CardTitleWrapper>
        <CardWrapper>
            <CardSubtitle>
                {subtitle}
            </CardSubtitle>
            <CardButtonWrapper>
                <CardButton onClick={toggle}>
                    Learn more
                </CardButton>
            </CardButtonWrapper>
        </CardWrapper>
    </CardContainer>
    </>
  )
}

export default Card