import { PureComponent } from 'react';
import css from './modal.module.css';

export default class Modal extends PureComponent {
  state = {
    show: false,
  };

  onClick = () => {
    this.setState({
      show: true,
    });
  };
  render() {
    const { image } = this.props;
    const { show } = this.state;

    this.setState(state => ({
      show: !state.show,
    }));
    // const { showModal } = this.state;
    return (
      <>
        {show && (
          <div className={css.modal__backdrop} onClick={this.onClick}>
            <div className={css.modal__content}>
              <img src={image} alt="" className={css.imageGalleryItem__image} />
            </div>
          </div>
        )}
      </>
    );
  }
}
//   closeCallback = event => {
//     const { toggleModal } = this.props;

//     if (event.key === 'Escape') {
//       toggleModal();
//     }
//   };

//   handlerClickBackdrop = event => {
//     const { toggleModal } = this.props;
//     if (event.currentTarget === event.target) {
//       toggleModal();
//     }
//   };
//   componentDidMount() {
//     window.addEventListener('keydown', this.closeCallback);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.closeCallback);
//   }
