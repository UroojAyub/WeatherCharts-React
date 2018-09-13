import React, {Component} from 'react';
import './App.css';
import SearchBar from './containers/search-bar/search-bar';

class App extends Component {
  render() {
    return (
      <div className="my-4">
        <h2 className="text-center">Weather Charts ReactJS</h2>
        <div className="container">
          <SearchBar/>
        </div>
      </div>
    );
  }
}

export default App;
