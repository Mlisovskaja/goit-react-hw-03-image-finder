import PropTypes from 'prop-types';
import styles from './image-gallery-item.module.css';
const ImageGalleryItem = ({ items, openModal }) => {
  const elements = items.map(({ id, tags, webformatURL, largeImageURL }) => (
    <li
      className={styles.imageGalleryItem}
      key={id}
      onClick={() => openModal({ largeImageURL, tags })}
    >
      <img
        className={styles.imageGalleryItem_image}
        src={webformatURL}
        alt={tags}
      />
    </li>
  ));
  return elements;
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
