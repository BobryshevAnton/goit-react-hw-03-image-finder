import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import { fetchImg } from './Fetch/Fetch';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
// import Modal from './Modal/Modal';

const API_KEY = '32040937-f5067777972aaaf890ed94a62';
const baseURL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    collection: [],
    collectionEmpty: false,
    isEnterText: true,
    isLoadingMore: false,
    error: '',
    isLoadingSpin: false,
    showModal: false,
  };

  // searchForm
  handleForm = searchForm => {
    this.setState({
      page: 1,
      searchQuery: searchForm,
      collection: [],
    });
  };
  // onClickButton
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  //modal
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  componentDidUpdate(_, prevState) {
    const { page, searchQuery } = this.state;

    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      this.setState({ isLoadingasa: true, isLoadingSpin: true });

      fetch(
        `${baseURL}?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=12`
      )
        .then(response => response.json())
        .then(collection => {
          if (collection.total === 0) {
            this.setState({ isLoadingMore: false, collectionEmpty: true });
            return;
          }
          this.setState(prevState => ({
            collection: [...prevState.collection, ...collection.hits],
            isLoadingMore: true,
            collectionEmpty: false,
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          setTimeout(() => {
            this.setState({
              isEmpty: false,
              isEnterText: false,
              isLoadingSpin: false,
            });
          }, 500);
        });
    }
  }

  render() {
    const {
      collection,
      error,
      isLoadingMore,
      isEnterText,
      collectionEmpty,
      searchQuery,
      isLoadingSpin,
      showModal,
    } = this.state;
    // console.log(collection);
    return (
      <div>
        {error && <div>Sorry, this pictures not found!... </div>}
        <Searchbar onForm={this.handleForm} />
        {isEnterText && (
          <div style={{ textAlign: 'center', marginTop: 10 }}>
            Please, enter any text...!
          </div>
        )}
        {isLoadingSpin && <Loader />}
        {collectionEmpty && (
          <div style={{ textAlign: 'center', marginTop: 10, color: 'red' }}>
            Sorry, this pictures,name'{searchQuery}' not found!...
          </div>
        )}
        <ImageGallery collection={collection} showModal={showModal} />
        {isLoadingMore && <Button loadMore={this.loadMore} />}

        {/* {showModal && <Modal />} */}
      </div>
    );
  }
}
export default App;
