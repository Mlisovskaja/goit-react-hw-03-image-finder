import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './image-gallery.module.css';
const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={styles.imageGallery}>
      <ImageGalleryItem items={items} openModal={openModal} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
