import { IconType } from "react-icons";

export interface IStatus {
  title: string;
  count: string;
  persistence: string;
  color: string;
  icon: IconType;
}

export interface IAttendance {
  title: string;
  days: string;
  color: string;
  icon: IconType;
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
}

export interface IEmployeeCount {
  title: string;
  count: string;
  color: string;
  icon: IconType;
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
