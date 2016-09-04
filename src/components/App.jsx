import React from 'react'

import LoadWeather from './LoadWeather'
import WeatherData from '../containers/WeatherDataContainer'

const App = () => (
  <div className='app-container'>
    <LoadWeather />
    <WeatherData />
  </div>
)

export default App
