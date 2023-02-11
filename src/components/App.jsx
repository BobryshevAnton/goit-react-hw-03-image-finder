import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import Fetch from './Fetch/Fetch';
import Button from './Button/Button';
// import axios from 'axios';

class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    collection: [],
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
    if (
      prevState.page !== this.state.page ||
      prevState.searchQuery !== this.state.searchQuery
    ) {
      // console.log(this.state.collection);
      // console.log('fetch');
      // console.log(this.state);
    }
  }
  //
  // async componentDidMount() {
  //   const { searchQuery } = this.state;

  //   const response = await axios.get('`&q=&{search}&page=1&per_page=3`');
  //   this.setState({ collection: response.data.hits });
  // }

  render() {
    return (
      <div>
        <Searchbar onForm={this.handleForm} />
        <Fetch query={this.state.searchQuery} />
        <Button loadMore={this.loadMore} />

        {/* <ImageGallery>
//         <ImageGalleryItem />
//       </ImageGallery> */}
      </div>
    );
  }
}
export default App;
