import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBoa9AEyuYfLbNDV_RMYxL7AsdGjohcZ0w';

//Create a new component. This component will produce HTML.
//The most parent component should be in charge of fetching data
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
      //could pass this.setState({videos}); only works when key and property have same name
    })
  }

  render() {
    //debounce takes inner function and returns a function that can only
    //be called once every 300 ms in this case
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}

//Append the component's generated HTML to the DOM
ReactDOM.render(<App />, document.getElementById('container'));
