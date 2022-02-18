import React from 'react'
import {
  Container,
  Wrapper,
  IconRow,
  IconColumn,
  IconWrapper,
  Icon,
  CloseWrapper,
  CloseButton
} from './FooterModalStyles'
import {FaWindowClose} from 'react-icons/fa'
import client1 from '../../../assets/client_1.png'
import client2 from '../../../assets/client_2.png'
import client3 from '../../../assets/client_3.png'
import client4 from '../../../assets/client_4.jpg'
import client5 from '../../../assets/client_5.png'
import client6 from '../../../assets/client_6.png'
import client7 from '../../../assets/client_7.jpg'


const FooterModal = () => {
  return (
    <>
        <Container>
          <Wrapper>
          <CloseWrapper>
            <CloseButton>
              <FaWindowClose />
            </CloseButton>
          </CloseWrapper>
            <IconRow>
              <IconColumn>
                <IconWrapper><Icon src={client1}/></IconWrapper>
                <IconWrapper><Icon src={client2}/></IconWrapper>
                <IconWrapper><Icon src={client3}/></IconWrapper>
                <IconWrapper><Icon src={client7}/></IconWrapper>
              </IconColumn>
              <IconColumn>
                <IconWrapper><Icon src={client4}/></IconWrapper>
                <IconWrapper><Icon src={client5}/></IconWrapper>
                <IconWrapper><Icon src={client6}/></IconWrapper>
              </IconColumn>
            </IconRow>
          </Wrapper>
        </Container>
    </>
  )
}

export default FooterModal