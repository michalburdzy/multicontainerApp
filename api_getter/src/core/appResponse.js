class AppResponse {
  constructor(statusCode = 200, body = {}) {
    this.statusCode = statusCode;
    this.body = body;
  }

  static success(body) {
    return new AppResponse(body, 200);
  }

  static created(body) {
    return new AppResponse(body, 201);
  }
}

module.exports = AppResponse;
