import css from './imageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

export default class ImageGallery extends Component {
  render() {
    const { collection } = this.props;
    return (
      <ul className={css.imageGallery}>
        {collection.map(elem => (
          <ImageGalleryItem elem={elem} key={elem.id} />
        ))}
      </ul>
    );
  }
}

// export const ImageGallery = ({ collection }) => {
//   console.log(collection);

//   return (
//     <ul className={css.imageGallery}>
//       {collection.map(elem => (
//         <ImageGalleryItem elem={elem} key={elem.id}>
//           <Modal />
//         </ImageGalleryItem>
//       ))}
//     </ul>
//   );
// };
// largeImageURL: 'https://pixabay.com/get/g9c50dd13508d16fe08fe6dae433289a912308c972f62d67a23ce0055754075876308c4e4ffde4a7cf0f63be38fc2068c72000a071ae50688ee87fd6554890738_1280.jpg';
// likes: 2221;
// -pageURL: 'https://pixabay.com/photos/cat-kitten-pet-kitty-young-cat-551554/';
// previewHeight: 150;
// previewURL: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg';
// previewWidth: 144;
// tags: 'cat, kitten, pet';
// type: 'photo';
// user: 'Ty_Swartz';
// userImageURL: 'https://cdn.pixabay.com/user/2014/11/30/13-45-12-52_250x250.jpg';
// user_id: 617282;
// views: 1180504;
// webformatHeight: 640;
// webformatURL: 'https://pixabay.com/get/gee9100b64f8f2c57fb95fa67c5a226d9caeb66ce1d6f878e70017e18d0c1a2d2c1dc5740651554fe6e868a2b04fdf9e0_640.jpg';
