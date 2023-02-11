import { Component } from 'react';
// import axios from 'axios';

// axios.defaults.baseURL =
//   'https://pixabay.com/api/?key=32040937-f5067777972aaaf890ed94a62';

export default class Fetch extends Component {
  //   const { searchQuery } = this.state;

  //   const response = await axios.get('`&q=&{search}&page=1&per_page=3`');
  //   this.setState({ collection: response.data.hits });
  // }
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      fetch(
        `https://pixabay.com/api/?key=32040937-f5067777972aaaf890ed94a62&q=${nextQuery}&page=1&per_page=20`
      )
        .then(response => response.json())
        .then(console.log);
      console.log('prevProps.query', prevProps.query);
      console.log('this.props.query', this.props.query);

      //   console.log('change name ');
    }
  }

  render() {
    return <div>bla bla</div>;
  }
}
