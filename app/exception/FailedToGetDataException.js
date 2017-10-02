function FailedToGetDataException(const message) {
  this._name = 'FailedToGetDataException';
  this._message = message;
}

module.exports = function() {
  return FailedToGetDataException;
}
