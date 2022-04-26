import { Document } from "mongoose";

export interface IClient extends Document {
  projectId: string;
  name: string;
  image: string;
  file: string;
  companyName: string;
  email: string;
  phone: number;
  date: string;
  currency: string;
  billMethod: string;
  location: string;
  description: string;
}
