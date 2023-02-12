import css from './imageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export const ImageGalleryItem = ({ elem, showModal }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={elem.webformatURL}
        alt={elem.user}
        className={css.imageGalleryItem__image}
      />
      <Modal image={elem.largeImageURL} showModal={showModal} />
    </li>
  );
};
