import { useEffect } from 'react'
import { createPortal } from 'react-dom'

// prop-types
import PropTypes from 'prop-types'

// emotion
import { Backdrop,ModalWindow } from './Modal.styled'

const rootModal = document.querySelector('#root-modal')

const Modal = ({largeImg , onClose}) => {

  useEffect(() => {

    window.addEventListener(`keydown`, handleKeyDown)

    return () => {
      window.removeEventListener(`keydown`, handleKeyDown)
    }
  })
  
  const handleKeyDown = e => e.code === 'Escape' ? onClose() : null

  const handleBackdropClose = e => e.target === e.currentTarget ? onClose() : null

  return createPortal(

    <Backdrop onClick={handleBackdropClose}>
      <ModalWindow largeImg={largeImg} />
    </Backdrop>
  , rootModal)
}

Modal.propTypes = {
  largeImg: PropTypes.string,
  onClose: PropTypes.func,
}

export default Modal