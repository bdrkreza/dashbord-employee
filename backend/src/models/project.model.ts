import { model, Schema } from "mongoose";
import { IProject } from "../types/project.type";

const ProjectSchema = new Schema<IProject>(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "CLIENTS",
    },
    project_name: {
      type: String,
      required: [true, "employee name is required"],
      max: [127, "Max Length is 127 characters"],
    },
    image: [
      {
        type: String,
        default: "url-image",
      },
    ],
    department: {
      type: String,
      required: [true, "project department is required"],
    },
    project_priority: {
      type: String,
      required: [true, "project priority is required"],
    },
    project_price: {
      type: Number,
      required: [true, "project price is required"],
    },
    start_date: {
      type: String,
      required: [true, "project Start date is required"],
    },
    end_date: {
      type: String,
      required: [true, "project end date is required"],
    },
    team_member: {
      type: Number,
      required: [true, "project team member is required"],
    },
    team_leader: {
      type: String,
      required: [true, "project Start date is required"],
    },
    category: {
      type: String,
      required: [true, "project category is required"],
    },
    description: {
      type: String,
      required: [true, "project description is required"],
    },
    phases: {
      type: String,
      required: [true, "project phases date is required"],
    },
    file: {
      type: String,
      required: [true, "project file is required"],
    },
  },
  { timestamps: true }
);

const ProjectModel = model<IProject>("PROJECTS", ProjectSchema);

export default ProjectModel;
