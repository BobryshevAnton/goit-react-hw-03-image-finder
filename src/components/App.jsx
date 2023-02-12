import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import { fetchImg } from './Fetch/Fetch';
import Button from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import axios from 'axios';
//  API
const API_KEY = '32040937-f5067777972aaaf890ed94a62';
const baseURL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    collection: [],
    //
    isEmpty: false,
    //
    isLoading: false,
    //
    error: '',
  };

  // searchForm
  handleForm = searchForm => {
    this.setState({
      page: 1,
      searchQuery: searchForm,
    });
  };

  // onClickButton
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  //

  componentDidUpdate(_, prevState) {
    const { page, searchQuery } = this.state;
    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      fetch(
        `${baseURL}?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=15`
      )
        .then(response => response.json())
        .then(collection =>
          this.setState(prevState => ({
            collection: [...prevState.collection, ...collection.hits],
          }))
        );
    }
    // console.log(this.state.collection);
  }

  render() {
    const { collection } = this.state;
    console.log(collection.hits);
    return (
      <div>
        <Searchbar onForm={this.handleForm} />

        <ImageGallery collection={collection} />
        <Button loadMore={this.loadMore} />
      </div>
    );
  }
}
export default App;
