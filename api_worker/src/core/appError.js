class AppError extends Error {
  constructor({ message, data, statusCode = 400 }) {
    super(message);

    Error.captureStackTrace(this, this.constructor);

    this.data = data;
    this.statusCode = statusCode;
  }

  toJSON() {
    return {
      message: this.message,
      data: this.data,
      statusCode: this.statusCode,
    };
  }

  static badRequest(message = 'Bad request', data) {
    return new AppError({ message, data, statusCode: 400 });
  }

  static unprocessableEntity(message = 'Unprocessable Entity', data) {
    return new AppError({ message, data, statusCode: 422 });
  }

  static notFound(message = 'Not Found', data) {
    return new AppError({ message, data, statusCode: 404 });
  }

  static unauthorized(message = 'Unauthorized', data) {
    return new AppError({ message, data, statusCode: 401 });
  }

  static conflict(message = 'Conflict', data) {
    return new AppError({ message, data, statusCode: 409 });
  }

  static serviceUnavailable(message = 'Service Unavailable', data) {
    return new AppError({ message, data, statusCode: 503 });
  }
}

module.exports = AppError;
