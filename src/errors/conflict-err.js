const http2 = require('http2');

class ConflictErr extends Error {
  constructor(message) {
    super(message);
    this.statusCode = http2.constants.HTTP_STATUS_CONFLICT;
  }
}

module.exports = ConflictErr;
