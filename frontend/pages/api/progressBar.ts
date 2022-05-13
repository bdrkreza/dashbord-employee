import { IProgress } from "../../Types";

export const progressBar: IProgress[] = [
  {
    id: "01",
    title: "Today",
    percentage: 70,
    hours: "02/08",
    color: "pink",
  },
  {
    id: "02",
    title: "This Week",
    percentage: 50,
    hours: "01/40",
    color: "orange",
  },
  {
    id: "03",
    title: "This Month",
    percentage: 40,
    hours: "02/160",
    color: "green",
  },
  {
    id: "04",
    title: "Overtime",
    percentage: 40,
    hours: "15:30",
    color: "cyan",
  },
  {
    id: "05",
    title: "Remaining",
    percentage: 30,
    hours: "01/08",
    color: "purple",
  },
];

export const activityDb = [
  {
    title: "Punch In at",
    name: "PI",
    time: "10 Am",
    color: "green",
  },
  {
    title: "Punch Out at",
    name: "PO",
    time: "6:30 Am",
    color: "blue",
  },
  {
    title: "break Time",
    name: "BR",
    time: "1 Pm to 2 Pm",
    color: "orange",
  },
];
