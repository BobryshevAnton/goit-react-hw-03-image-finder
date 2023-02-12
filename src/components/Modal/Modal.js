// import { Component } from 'react';
// import css from './modal.module.css';

// export default class Modal extends Component {
//   state = {
//     show: false,
//   };

//   render() {
//     const { image } = this.props;
//     const { show } = this.state;

//     this.setState(state => ({
//       show: !state.show,
//     }));

//     return (
//       <>
//         {show && (
//           <div className={css.modal__backdrop}>
//             <div className={css.modal__content}>
//               <img src={image} alt="" className={css.imageGalleryItem__image} />
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }
// }
// //   closeCallback = event => {
// //     const { toggleModal } = this.props;

// //     if (event.key === 'Escape') {
// //       toggleModal();
// //     }
// //   };

// //   handlerClickBackdrop = event => {
// //     const { toggleModal } = this.props;
// //     if (event.currentTarget === event.target) {
// //       toggleModal();
// //     }
// //   };
// //   componentDidMount() {
// //     window.addEventListener('keydown', this.closeCallback);
// //   }

// //   componentWillUnmount() {
// //     window.removeEventListener('keydown', this.closeCallback);
// //   }
