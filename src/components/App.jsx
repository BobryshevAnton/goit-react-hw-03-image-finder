import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

import MyPage from './MyPage/MyPage';

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
    largeImageURL: '',
    isPagin: false,
    //
    totalHits: '',
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

  //pagine
  load = x => {
    this.setState({
      page: x,

      collection: [],
    });
  };

  setLargeImgUrl = largeImageURL => {
    this.setState({
      largeImageURL: largeImageURL,
    });
  };

  closeModal = event => {
    if (event.key === 'Escape') {
      this.setState({
        largeImageURL: '',
      });
    }
  };
  handlerClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.setState({
        largeImageURL: '',
      });
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }
  //

  componentDidUpdate(_, prevState) {
    const { page, searchQuery } = this.state;
    const length = page * 12;
    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      this.setState({ isLoadingSpin: true });

      fetch(
        `${baseURL}?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=12`
      )
        .then(response => response.json())
        .then(collection => {
          if (collection.total === 0 || length >= collection.totalHits) {
            this.setState({ isLoadingMore: false, collectionEmpty: true });
            return;
          }

          if (collection.total === 0) {
            this.setState({ isPagin: false });
            return;
          }

          this.setState(prevState => ({
            collection: [...prevState.collection, ...collection.hits],
            isLoadingMore: true,
            isPagin: true,
            collectionEmpty: false,
            totalHits: collection.totalHits,
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
      page,
      collection,
      error,
      isLoadingMore,
      isEnterText,
      collectionEmpty,
      searchQuery,
      isLoadingSpin,
      largeImageURL,
      isPagin,
      totalHits,
    } = this.state;

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
        <ImageGallery
          collection={collection}
          setLargeImgUrl={this.setLargeImgUrl}
        />
        {largeImageURL && (
          <Modal
            largeImageURL={largeImageURL}
            handlerClickBackdrop={this.handlerClickBackdrop}
          />
        )}
        {isLoadingMore && <Button loadMore={this.loadMore} />}
        {isPagin && (
          <MyPage
            load={this.load}
            loadEnd={this.loadEnd}
            realPage={page}
            total={totalHits}
            loadfone={this.loadone}
            loadfirst={this.loadfirst}
            loadtwo={this.loadtwo}
            loadthree={this.loadthree}
            loadfour={this.loadfour}
            loadfive={this.loadfive}
          />
        )}
      </div>
    );
  }
}
export default App;
