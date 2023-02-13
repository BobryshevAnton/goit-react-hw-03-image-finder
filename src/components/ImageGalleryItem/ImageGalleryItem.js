import css from './imageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    setIsModalOpen: false,
  };

  render() {
    const { elem } = this.props;
    return (
      <li
        className={css.imageGalleryItem}
        onClick={() => this.setIsModalOpen(false)}
      >
        <img
          // onClic={this.isModalOpen}
          src={elem.webformatURL}
          alt={elem.user}
          className={css.imageGalleryItem__image}
        />
        {this.isModalOpen && (
          <Modal
            image={elem.largeImageURL}
            // onClose={() => this.setIsModalOpen(false)}
          />
        )}
      </li>
    );
  }
}
