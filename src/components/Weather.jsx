import React, {PropTypes} from 'react'

const Weather = ({url}) => (
  <div>{description}</div>
)

Weather.propTypes = {
  description: PropTypes.string.isRequired
}

export default Weather
