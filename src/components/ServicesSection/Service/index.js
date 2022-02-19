import React from 'react'
import {
    Container,
    Wrapper,
    HeaderWrapper,
    Header,
    ContentWrapper,
    Content
} from './ServiceStyles';
import {useState} from 'react'

const Service = ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
  return (
    <>
        <Container>
            <Wrapper>
                <HeaderWrapper onClick={toggle}>
                    <Header>
                        Header
                    </Header>
                </HeaderWrapper>
                <ContentWrapper isOpen={isOpen}>
                    <Content>
                        This is where the content goes
                    </Content>
                </ContentWrapper>
            </Wrapper>
        </Container>
    </>
  )
}

export default Service