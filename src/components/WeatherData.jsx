import React, {PropTypes} from 'react'

import Weather from './Weather'

const WeatherInfo = ({weathers}) => (
  <div>
      <Weather
        description={weathers.weather}
        />
    )
  </div>
)

WeatherInfo.propTypes = {
  weathers: PropTypes.object.isRequired
}

export default WeatherInfo
