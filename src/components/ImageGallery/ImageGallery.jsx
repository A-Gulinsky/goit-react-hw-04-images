// prop types
import PropTypes from 'prop-types'

// components
import ImageGalleryList from "components/ImageGalleryList";
import Button from "components/Button";
import Loader from "components/Loader";

// emotion
import { GalleryBox } from "./ImageGallery.styled";

// toast
import { toast } from "react-toastify";

const ImageGallery = ({ onChangePage, useStates }) => {
  
  const {totalHits,hits,loader} = useStates

  if (totalHits === hits.length && totalHits) {
    toast.info(`Its all that we could find`)
  }

  return (
    <GalleryBox>

      {loader && <Loader />}
      <ImageGalleryList items={hits} />
      {totalHits !== hits.length && <Button isLoad={loader} onClick={onChangePage} />}
        
    </GalleryBox>
  )
}

ImageGallery.propTypes = {
  onChangePage: PropTypes.func,
  useStates: PropTypes.shape({
    totalHits: PropTypes.number.isRequired,
    hits: PropTypes.array.isRequired,
    loader: PropTypes.bool.isRequired,
  })
}

export default ImageGallery