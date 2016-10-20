import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBoa9AEyuYfLbNDV_RMYxL7AsdGjohcZ0w';

//Create a new component. This component will produce HTML.
//The most parent component should be in charge of fetching data
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key:API_KEY, term:'surfboards'}, videos => {
      this.setState({ videos });
      //this.setState({videos:videos}); only works when key and property have same name
    })
  }

  render() {
    return (
      <div>
      <SearchBar />
      </div>
    );
  }
}

//Append the component's generated HTML to the DOM
ReactDOM.render(<App />, document.getElementById('container'));
