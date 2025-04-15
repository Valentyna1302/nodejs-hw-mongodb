import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  const status = error.status || 500;
  const message = error.message || 'Server error';

  res.status(status).json({
    status,
    message,
  });
};
