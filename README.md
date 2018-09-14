# WeatherCharts-React

This application allows the search and comparison of weather data of various cities on a single page. It makes use of Google Maps, ReactChartJs2 and Redux to display a map of the searched location and line graphs of temperature, pressure and humidity forecast for that city.  
 ![WeatherSearch](https://raw.githubusercontent.com/UroojAyub/WeatherCharts-React/master/screenshots/WeatherSearch.png)

## Getting Started

### Prerequisites

- NodeJS
- Google Maps API key
- OpenWeatherMap API kye


### Installing

1. Clone or download this repository
2. Run `npm install` in the project directory to install dependencies
3. Navigate to `src/components/map/map.js` and insert your Google Map API key in `const API_KEY = "MAP_API_KEY"`
4. Go to `src/actions/weather.js` and insert your OpenWeatherMap API key in `const API_KEY = "YOUR_API_KEY"`
5. Run `npm start` to launch the development server and serve the application on http://localhost:3000


## Built With

* ReactJS
* Google Maps
* OpenWeatherMap
* ReactChartJs2
* Chart.js
* Redux
* Redux Thunk
  

## Authors

*  **Urooj Ayub**- uroojayub17@gmail.com-[(Github)](https://github.com/UroojAyub)
  

## License
This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3 - see the [LICENSE](https://github.com/UroojAyub/WeatherCharts-React/blob/master/LICENSE) file for details