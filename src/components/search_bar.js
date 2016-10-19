import React, { Component } from 'react';
//This way we do not have to say extends React.Component
class SearchBar extends Component{
  render() {
    return(
       <input onChange={event => console.log(event.target.value)}/>
    )
  }
}

export default SearchBar;
