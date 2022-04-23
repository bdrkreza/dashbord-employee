import { model, Schema } from "mongoose";
import { IEmployee } from "../types/employee.type";

const employeeSchema = new Schema<IEmployee>({
  name: {
    type: String,
    required: [true, "employee name is required"],
    max: [127, "Max Length is 127 characters"],
  },
  avatar: {
    type: String,
    default: "url-image",
  },
  department: {
    type: String,
    required: [true, "employee department is required"],
  },
  age: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: [true, "employee salary is required"],
  },
  designation: {
    type: String,
    required: [true, "employee designation is required"],
  },
});

module.exports = model<IEmployee>("Employee", employeeSchema);
