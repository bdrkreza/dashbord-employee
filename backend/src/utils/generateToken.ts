import jwt from "jsonwebtoken";
import { IUser } from "../types/auth.type";

/**
 * Generate a json web token for a user
 * @param id The id of the user
 */
const createJWTToken = (user: IUser) => {
  if (process.env.JWT_SECRET !== undefined) {
    return jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  }
};

export default createJWTToken;
