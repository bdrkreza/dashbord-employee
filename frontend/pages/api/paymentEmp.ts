import manImg1 from "../../public/man-1.svg";
import manImg2 from "../../public/man2.svg";
import woman2 from "../../public/woman-2.svg";
import { IEmployeeSalary } from "../../Types";

export const employee_salary: IEmployeeSalary[] = [
  {
    name: "Luke Short",
    designation: "UI/UX Designer",
    img: manImg1,
    amount: "10,000",
    payment: true,
    payId: "#4950",
    date: "01/02/2021",
    month: "january-2022",
  },
  {
    name: "Lillian Powell",
    designation: "Quality Assurance",
    img: manImg2,
    amount: "20,000",
    payment: false,
    payId: "#4940",
    date: "01/02/2021",
    month: "january-2022",
  },
  {
    name: "John Hardacare",
    designation: "Developer",
    img: manImg2,
    amount: "30,000",
    payment: true,
    payId: "#4930",
    date: "01/02/2021",
    month: "january-2022",
  },
  {
    name: "Rachel Parsons",
    designation: "Website Designer",
    img: woman2,
    amount: "50,000",
    payment: false,
    payId: "#4920",
    date: "01/02/2021",
    month: "january-2022",
  },
  {
    name: "Ziul Rahman",
    designation: "Full Stack Developer",
    img: manImg1,
    amount: "40,000",
    payment: true,
    payId: "#4910",
    date: "01/02/2021",
    month: "january-2022",
  },
];
