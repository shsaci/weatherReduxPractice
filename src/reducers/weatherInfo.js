function weatherInfo (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_WEATHER':
      return action.weatherInfo

    default:
      return state
  }
}

export default weatherInfo
