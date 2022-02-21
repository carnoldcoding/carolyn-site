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
import {service1, service2, service3} from './data'

const Services = ({boxHeader}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
        <Container id="services">
            <Wrapper>
                <BoxWrapper>
                    <HeaderWrapper onClick={toggle} isOpen={isOpen}>
                        <Header>
                            {boxHeader}
                        </Header>
                    </HeaderWrapper>
                    <ContentWrapper isOpen={isOpen}>
                        <Service {...service1}/>
                        <Service {...service2}/>
                        <Service {...service3}/>
                    </ContentWrapper>
                </BoxWrapper>
            </Wrapper>
        </Container>
    </>
  )
}

export default Services