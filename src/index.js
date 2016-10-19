import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBoa9AEyuYfLbNDV_RMYxL7AsdGjohcZ0w';

//Create a new component. This component will produce HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Append the component's generated HTML to the DOM
ReactDOM.render(<App />, document.getElementById('container'));
