const http2 = require('http2');

class BadRequestErr extends Error {
  constructor(message) {
    super(message);
    this.statusCode = http2.constants.HTTP_STATUS_BAD_REQUEST;
  }
}

module.exports = BadRequestErr;
