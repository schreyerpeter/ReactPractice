import React, { Component } from 'react';
//This way we do not have to say extends React.Component
class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term : '' };
  }
  render() {
    return(
       <div>
        <input onChange={event => this.setState({ term: event.target.value })}/>
       </div>
    );
  }
}

export default SearchBar;
