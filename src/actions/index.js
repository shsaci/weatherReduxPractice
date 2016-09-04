import request from 'superagent'

export const receiveWeather = (weatherInfo) => {
  return {
    type: 'RECEIVE_WEATHER',
    weatherInfo
  }
}

export function fetchWeather (cityName) {
  return (dispatch) => {
    request
      .get(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=5f7bcf238dc7056a7325948af9cb61be`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log(res.body)
        dispatch(receiveWeather(res.body))
      })
  }
}
