import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../../components/chart/chart';
import Map from '../../components/map/map';
import Alert from '../../components/alert/alert';
import './weather-table.css';

class WeatherTable extends Component {

    renderCityData = (data, index) => {
        const temps = data
            .list
            .map(weather => ({
                x: new Date(weather.dt * 1000),
                y: weather.main.temp
            }));

        const humidities = data
            .list
            .map(weather => ({
                x: new Date(weather.dt * 1000),
                y: weather.main.humidity
            }));
        const pressures = data
            .list
            .map(weather => ({
                x: new Date(weather.dt * 1000),
                y: weather.main.pressure
            }));

        return (
            <tr key={index}>
                <td><Map lat={data.city.coord.lat} lng={data.city.coord.lon} isMarkerShown/></td>
                <td>
                    <Chart
                        height={200}
                        width={250}
                        fillColor="#7979ff"
                        lineColor="#142e92"
                        data={temps}
                        unitY="°C"></Chart>
                </td>
                <td>
                    <Chart
                        height={200}
                        width={250}
                        fillColor="#ea7458"
                        lineColor="#b93111"
                        data={humidities}
                        unitY="%"></Chart>
                </td>
                <td>
                    <Chart
                        height={200}
                        width={250}
                        fillColor="#77d08f"
                        lineColor="#37884c"
                        data={pressures}
                        unitY="hPa"></Chart>
                </td>
            </tr>

        )
    }

    render() {;

        let content = null;

        if (!this.props.weathers.length) {
            content = <h5 className='text-center my-5'>Search a city name to get started</h5>;
        } else {
            content = (
                <table className="table table-hover my-4" id="weather">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Humidity</th>
                            <th>Pressure</th>
                        </tr>
                    </thead>
                    <tbody>{this
                            .props
                            .weathers
                            .map((data, index) => this.renderCityData(data, index))}</tbody>

                </table>
            );
        }

        return (
            <div>
                <Alert
                    show={this.props.searchError
                    ? true
                    : false}
                    type="alert-danger"
                    message={this.props.searchError}/> {content}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {weathers: state.weathers.weatherData, searchError: state.weathers.error};
}
export default connect(mapStateToProps)(WeatherTable)
