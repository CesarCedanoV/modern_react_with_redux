import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

  
  onSearchSubmit = async (term) => {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        headers:{
          Authorization: 'Client-ID f7a003510f63fa087da7b2de17265e9f1da6d89623be6d044a5dd4e5ecec77af'
        },
        params:{
          query: term
        }
      }
    );
    console.log(response.data.results);
  }
  
  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;