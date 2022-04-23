import { Document } from "mongoose";

export interface IUser {
  _id: string;
  username: string;
  email: string;
  phone: number | undefined;
  role: string;
}

export interface IAuthUser extends Document {
  username: string;
  avatar?: string;
  phone?: number;
  email: string;
  password: string;
  role: string;
}

export interface IAuthDocument extends IAuthUser {
  isValidPassword: (password: string) => Promise<Boolean>;
}
