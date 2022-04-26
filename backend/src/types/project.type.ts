import { Document } from "mongoose";

export interface IProject extends Document {
  clientId: string;
  project_name: string;
  image: string[];
  department: string;
  project_priority: string;
  project_price: number;
  start_date: string;
  end_date: string;
  team_member: number;
  team_leader: string;
  category: string;
  description: string;
  phases: string;
  file: string;
}
