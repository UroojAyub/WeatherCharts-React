import React, {Component} from 'react';
import './App.css';
import SearchBar from './containers/search-bar/search-bar';
import WeatherTable from './containers/weather-table/weather-table';

class App extends Component {
  render() {
    return (
      <div className="my-4">
        <h2 className="text-center">Weather Charts ReactJS</h2>
        <div className="container">
          <SearchBar />
          <WeatherTable/>
        </div>
      </div>
    );
  }
}

export default App;
