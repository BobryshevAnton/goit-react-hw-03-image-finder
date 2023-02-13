import { Component } from 'react';
import css from './modal.module.css';

export default class Modal extends Component {
  render() {
    const { image } = this.props;

    return (
      <div className={css.modal__backdrop}>
        <div className={css.modal__content}>
          <img src={image} alt="" className={css.imageGalleryItem__image} />
        </div>
      </div>
    );
  }
}
