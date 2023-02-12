import css from './imageGalleryItem.module.css';

export const ImageGalleryItem = ({ elem }) => {
  return (
    <li className={css.iimageGalleryItem}>
      <img
        src={elem.userImageURL}
        alt={elem.user}
        className={css.imageGalleryItem__image}
      />
    </li>
  );
};
