import { IconType } from "react-icons";

export interface IStatus {
  title: string;
  count: string;
  persistence: string;
  color: string;
  icon: IconType;
}

export interface IInVoices {
  invoiceId: string;
  company: string;
  name: string;
  start_date: string;
  end_date: string;
  status: boolean;
  amount: string;
  image: string;
  color: string;
}

export interface IExpenses {
  expId: string;
  image: string;
  item: string;
  amount: string;
  order_by: string;
  date: string;
  from: string;
  status: boolean;
}
export interface IAttendance {
  title: string;
  days: string;
  color: string;
  icon: IconType;
}

export interface IAttendanceTable {
  id: string;
  date: string;
  punchIn_time: string;
  punchOut_time: string;
  break_time: string;
  half_day: boolean;
  full_day: boolean;
  over_time: string;
  total: string;
}

export interface IHoliday {
  id: string;
  weakly: string;
  date: string;
  holiday: string;
  color: string;
}

export interface IEmployee {
  name: string;
  designation: string;
  img: any;
  describe: string;
  percentage: number;
}

export interface IEmployeeCount {
  title: string;
  count: string;
  color: string;
  icon: IconType;
}

export interface IEmployeeSalary {
  name: string;
  designation: string;
  img: any;
  amount: string;
  payment: boolean;
  payId: string;
  date: string;
  month: string;
}

export interface IDepartment {
  name: string;
  person: number;
  icon: IconType;
  color: string;
}

export interface IDepartmentTeam {
  id: string;
  team_head: string;
  department: string;
  under_work: string;
  image: string;
  color: string;
}

export interface IProject {
  projectName: string;
  image: string;
  color: string;
  stage: string;
  persistance: string;
  task: string;
  budget: string;
  date: string;
  teamLeader: string;
  team: {
    img: string;
  }[];
}

export interface IProgress {
  id: string;
  title: string;
  percentage: number;
  hours: string;
  color: string;
}

export interface IClientCount {
  title: string;
  count: string;
  color: string;
  icon: IconType;
}

export interface IClient {
  id: string;
  company: string;
  name: string;
  designation: string;
  img: string;
  describe: string;
}
