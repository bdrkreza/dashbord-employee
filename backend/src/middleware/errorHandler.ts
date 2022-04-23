import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = { ...err, message: err.message };

  if (error.message === "jwt expired") {
    error.statusCode = 401;
    error.message = "please signup/login first!";
  }
  if (error.message === `Cannot read property 'startsWith' of undefined`) {
    error.statusCode = 401;
    error.message = "make sure you provide a login token";
  }
  if (error.message === `jwt malformed`) {
    error.statusCode = 401;
    error.message = "make sure you provide a valid login token";
  }
  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server Error" });
  next();
};

export { notFound, errorHandler };
