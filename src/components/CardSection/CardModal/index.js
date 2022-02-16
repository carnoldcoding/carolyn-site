import React from 'react'
import {
    ModalContainer,
    ModalWrapper,
    ModalHeaderWrapper,
    ModalHeader,
    ModalSubtitleWrapper,
    ModalSubtitle,
    ModalButtonWrapper,
    ModalButton
} from './CardModalStyles'
import {FaWindowClose} from 'react-icons/fa'

const CardModal = ({isOpen, toggle, modalHeader, modalContent}) => {
  return (
    <ModalContainer isOpen={isOpen}>
        <ModalWrapper>
            <ModalButtonWrapper>
                <ModalButton onClick={toggle}>
                    <FaWindowClose />
                </ModalButton>
            </ModalButtonWrapper>
            <ModalHeaderWrapper>
                <ModalHeader>
                    {modalHeader}
                </ModalHeader>
            </ModalHeaderWrapper>
            <ModalSubtitleWrapper>
                <ModalSubtitle>
                    {modalContent}
                </ModalSubtitle>
            </ModalSubtitleWrapper>
        </ModalWrapper>
    </ModalContainer>
  )
}

export default CardModal