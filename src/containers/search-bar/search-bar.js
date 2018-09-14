import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather, clearWeatherSearches} from '../../actions';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this
            .props
            .searchCityWeather(this.state.search);
        this.setState({search: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="form-inline">
                    <div className="form-group col-sm-9">
                        <input
                            type="search"
                            value={this.state.search}
                            placeholder="Enter a city name"
                            onChange={(e) => this.setState({search: e.target.value})}
                            className="form-control w-100"/>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success col-sm-2"
                        disabled={!this.state.search}>Submit</button>
                    <button
                        className="btn btn-danger col-sm-1"
                        disabled={!this.props.weathers.length}
                        onClick={this.props.clearSearches}>Clear</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {weathers: state.weathers.weatherData}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchCityWeather: fetchWeather,
        clearSearches: clearWeatherSearches
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
