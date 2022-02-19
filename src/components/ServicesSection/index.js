import React from 'react'
import {
    Container,
    Wrapper,
    HeaderWrapper,
    Header,
    ContentWrapper,
    Content,
    BoxWrapper
} from './ServicesStyles'
import Service from './Service'
import {useState} from 'react';

const Services = ({boxHeader}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
        <Container>
            <Wrapper>
                <BoxWrapper>
                    <HeaderWrapper onClick={toggle} isOpen={isOpen}>
                        <Header>
                            {boxHeader}
                        </Header>
                    </HeaderWrapper>
                    <ContentWrapper isOpen={isOpen}>
                        <Service/>
                        <Service/>
                        <Service/>
                    </ContentWrapper>
                </BoxWrapper>
            </Wrapper>
        </Container>
    </>
  )
}

export default Services