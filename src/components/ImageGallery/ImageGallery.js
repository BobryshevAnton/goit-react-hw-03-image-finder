import css from './imageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { Component } from 'react';

export default class ImageGallery extends Component {
  render() {
    const { collection, setLargeImgUrl } = this.props;

    return (
      <ul className={css.imageGallery}>
        {collection.map(elem => (
          <ImageGalleryItem
            elem={elem}
            key={elem.id}
            setLargeImgUrl={setLargeImgUrl}
          />
        ))}
      </ul>
    );
  }
}
