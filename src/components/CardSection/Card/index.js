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

const Card = ({title, subtitle, modalHeader, modalContent}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)};
    
  return (
    <>
    <CardModal isOpen={isOpen} toggle={toggle} 
    modalHeader={modalHeader} modalContent={modalContent}/>
    <CardContainer>
        <CardWrapper>
            <CardTitleWrapper>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardTitleWrapper>
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