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

const Service = ({header, content, parentOpen}) => {
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
                        {header}
                    </Header>
                </HeaderWrapper>
                <ContentWrapper isOpen={isOpen && parentOpen}>
                    <Content>
                        {content}
                    </Content>
                </ContentWrapper>
            </Wrapper>
        </Container>
    </>
  )
}

export default Service