import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { IAuthDocument } from "../types/auth.type";

const AuthSchema = new mongoose.Schema<IAuthDocument>(
  {
    username: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    email: {
      unique: true,
      type: String,
      lowercase: true,
      required: [true, "A user must have an email address"],
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required!"],
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "merchant", "user"],
    },
    avatar: {
      type: String,
      default: "url-image",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "password should be greater than or equal 6 character!"],
    },
  },
  { timestamps: true }
);

AuthSchema.pre("save", async function (next) {
  const user = this;
  const hash = await bcrypt.hash(user.password, 10);
  this.password = hash;
  next();
});

AuthSchema.methods.isValidPassword = async function (password: string) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

export const AuthUser = mongoose.model<IAuthDocument>("USERS", AuthSchema);
