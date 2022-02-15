import React from 'react'
import {
    ModalContainer,
    ModalWrapper,
    ModalHeaderWrapper,
    ModalHeader,
    ModalSubtitleWrapper,
    ModalSubtitle
} from './CardModalStyles'

const CardModal = ({isOpen, toggle}) => {
  return (
    <ModalContainer isOpen={isOpen} onClick={toggle}>
        <ModalWrapper>
            <ModalHeaderWrapper>
                <ModalHeader>
                    Header
                </ModalHeader>
            </ModalHeaderWrapper>
            <ModalSubtitleWrapper>
                <ModalSubtitle>
                    Subtitle
                </ModalSubtitle>
            </ModalSubtitleWrapper>
        </ModalWrapper>
    </ModalContainer>
  )
}

export default CardModal