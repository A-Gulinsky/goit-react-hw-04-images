import { useState } from "react";

// prop -types
import PropTypes from 'prop-types'

// modal
import Modal from "components/Modal";

// emotion
import { Img } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ item }) => {

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => setShowModal(prev => !prev)

  const { webformatURL, tags, largeImageURL } = item
    
  return (
    <>
      <Img src={webformatURL} alt={tags} onClick={toggleModal} />

      {showModal && <Modal largeImg={largeImageURL} tags={tags} onClose={toggleModal} />}
    </>
  )
}


ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string,
  })
}

export default ImageGalleryItem