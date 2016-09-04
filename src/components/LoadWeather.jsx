import React from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions'

let LoadWeather = ({dispatch}) => (
  <button
    onClick={() => dispatch(fetchWeather('auckland'))}
    >Fetch Weather</button>
)

LoadWeather = connect()(LoadWeather)

export default LoadWeather
