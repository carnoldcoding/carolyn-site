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
} from './ClientModalStyles'
import {FaWindowClose} from 'react-icons/fa'
import client1 from '../../../assets/client_1.png'
import client2 from '../../../assets/client_2.png'
import client3 from '../../../assets/client_3.png'
import client4 from '../../../assets/client_4.jpg'
import client5 from '../../../assets/client_5.png'
import client6 from '../../../assets/client_6.png'
import client7 from '../../../assets/client_7.jpg'
import {useState} from 'react';


const ClientModal = ({toggle, isOpen}) => {
  
  return (
    <>
        <Container isOpen={isOpen}>
          <Wrapper>
          <CloseWrapper>
            <CloseButton onClick={toggle}>
              <FaWindowClose />
            </CloseButton>
          </CloseWrapper>
            <IconRow>
              <IconColumn>
                <IconWrapper href="https://cahnj.org/" target="_blank"><Icon src={client1}/></IconWrapper>
                <IconWrapper href="https://urcommunitycares.org/" target="_blank"><Icon src={client2}/></IconWrapper>
                <IconWrapper href="https://njwindsymphony.org/" target="_blank"><Icon src={client3}/></IconWrapper>
                <IconWrapper href="https://brookdalepark.org/" target="_blank"><Icon src={client7}/></IconWrapper>
              </IconColumn>
              <IconColumn>
                <IconWrapper href="https://www.onetruezone.org/" target="_blank"><Icon src={client4}/></IconWrapper>
                <IconWrapper href="https://www.thephoenixcenternj.org/" target="_blank"><Icon src={client5}/></IconWrapper>
                <IconWrapper href="https://www.facebook.com/theSFDF/" target="_blank"><Icon src={client6}/></IconWrapper>
              </IconColumn>
            </IconRow>
          </Wrapper>
        </Container>
    </>
  )
}

export default ClientModal
