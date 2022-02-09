function geolocationOk(location) {
  const coords = location.coords
  const lat = coords.latitude
  const lon = coords.longitude

  console.log('My current position is ', lat, lon)
}

function geolocationError() {
  console.log('Where i am?')
}

navigator.geolocation.getCurrentPosition(geolocationOk, geolocationError)
