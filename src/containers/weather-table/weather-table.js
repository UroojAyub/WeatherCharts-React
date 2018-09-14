import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../../components/chart/chart';
import './weather-table.css';

class WeatherTable extends Component {

    renderCityData = (data) => {

        const name = data.city.name;
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
            <tr key={data.city.id}>
                <td>{name}</td>
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

    render() {
        const weatherRows = this
            .props
            .weathers
            .map(data => this.renderCityData(data))
        if(!this.props.weathers.length){
            return <h5 className='text-center my-5'>Search a city name to get started</h5>;
        }
        return (
            <table className="table table-hover my-4" id="weather">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                    </tr>
                </thead>
                <tbody>{weatherRows}</tbody>

            </table>

        )
    }
}
function mapStateToProps(state) {
    return {weathers: state.weathers.weatherData};
}
export default connect(mapStateToProps)(WeatherTable)
