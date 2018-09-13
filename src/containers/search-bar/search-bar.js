import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../../actions';
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
                    <div className="form-group col-sm-10">
                        <input
                            type="search"
                            value={this.state.term}
                            placeholder="Enter a city name"
                            onChange={(e) => this.setState({search: e.target.value})}
                            className="form-control w-100"/>
                    </div>
                    <button type="submit" className="btn btn-success col-sm-2">Submit</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchCityWeather: fetchWeather
    }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar)
