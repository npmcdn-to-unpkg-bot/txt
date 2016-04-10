exports.onRouteChange = () => {
  if (window._gs) {
    _gs('track')
  }
}
