import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderCityWeather(cityData){
        const cityName = cityData.city.name
        const cityTemperatures = cityData.list.map(weather => weather.main.temp);
        const cityPressures = cityData.list.map(weather => weather.main.pressure);
        const cityHumidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        return(
            <tr key={cityName}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={cityTemperatures} color="red" units="Kelvin" /></td>
                <td><Chart data={cityPressures} color="green" units="hPa" /></td>
                <td><Chart data={cityHumidities} color="blue" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
           <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (Kelvin) </th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.weather.map(this.renderCityWeather)}
                </tbody>

           </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
