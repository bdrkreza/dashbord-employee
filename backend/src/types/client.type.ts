import { Document } from "mongoose";

export interface IClient extends Document {
  projectId: string;
  name: string;
  image: string;
  file: string;
  company_name: string;
  email: string;
  phone: number;
  date: string;
  currency: string;
  bill_method: string;
  location: string;
  description: string;
}
