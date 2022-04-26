import { model, Schema } from "mongoose";
import { emailRegex } from "../types/auth.type";
import { IClient } from "../types/client.type";

const ClientSchema = new Schema<IClient>(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "PROJECTS",
    },
    name: {
      type: String,
      required: [true, "employee name is required"],
      max: [127, "Max Length is 127 characters"],
    },
    image: {
      type: String,
      default: "url-image",
    },
    file: {
      type: String,
      default: "url-file",
    },
    companyName: {
      type: String,
      required: [true, "company Name is required"],
    },
    email: {
      type: String,
      match: [emailRegex, "Please add a valid email address."],
      required: [true, "Please enter Email Address"],
      unique: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    date: {
      type: String,
      required: [true, "date  is required"],
    },
    currency: {
      type: String,
      required: [true, "currency is required"],
    },
    billMethod: {
      type: String,
      required: [true, "billMethod is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { timestamps: true }
);

const ClientModel = model<IClient>("CLIENT", ClientSchema);

export default ClientModel;
