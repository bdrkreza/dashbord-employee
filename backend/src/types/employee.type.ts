import { ErrorRequestHandler } from "express";

export interface IEmployee extends Document {
  name: string;
  avatar?: string;
  department: string;
  age: number;
  salary: number;
  designation: string;
}

export interface ErrorStatus extends ErrorRequestHandler {
  code: string;
  message: string;
}
