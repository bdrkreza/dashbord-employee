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
      type: String,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please add a valid email address.",
      ],
      required: [true, "Please enter Email Address"],
      unique: true,
      lowercase: true,
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
