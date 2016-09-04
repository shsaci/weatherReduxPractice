import {connect} from 'react-redux'

import WeatherData from '../components/WeatherData'

const mapStateToProps = (state) => {
  return {
    weathers: state.weathers
  }
}

export default connect(
  mapStateToProps
)(WeatherData)
