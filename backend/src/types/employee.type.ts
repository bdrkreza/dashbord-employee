export interface IEmployee extends Document {
  name: string;
  avatar?: string;
  department: string;
  age: number;
  salary: number;
  designation: string;
}
