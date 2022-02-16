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
import {useInView} from 'react-intersection-observer'


const Card = ({title, subtitle, modalHeader, modalContent, background, delay}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)};

    const { ref, inView } = useInView({
        threshold: .2
    });
    
  return (
    <>
    <CardModal isOpen={isOpen} toggle={toggle} 
    modalHeader={modalHeader} modalContent={modalContent}/>
    <CardContainer background={background} delay={delay} ref={ref}
    animate={inView}>
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