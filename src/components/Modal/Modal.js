import { Component } from 'react';
import css from './modal.module.css';

export default class Modal extends Component {
  state = {
    img: '',
  };

  render() {
    const { largeImageURL, handlerClickBackdrop } = this.props;

    return (
      <div className={css.modal__backdrop} onClick={handlerClickBackdrop}>
        <div className={css.modal__content}>
          <img
            src={largeImageURL}
            alt={largeImageURL}
            className={css.imageGalleryItem__image}
          />
        </div>
      </div>
    );
  }
}
