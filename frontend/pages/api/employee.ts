import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { IoIosMan } from "react-icons/io";
import { IoWomanOutline } from "react-icons/io5";
import manImg1 from "../../public/man-1.svg";
import manImg2 from "../../public/man2.svg";
import woman2 from "../../public/woman-2.svg";
import woman1 from "../../public/woman1.svg";
import { IEmployee, IEmployeeCount } from "../../Types";

export const employee_api: IEmployeeCount[] = [
  {
    title: "Total Employee",
    count: "26",
    color: "green",
    icon: HiUserGroup,
  },
  {
    title: "Total Male Employee",
    count: "15",
    color: "blue",
    icon: IoIosMan,
  },
  {
    title: "Total Female Employee",
    count: "10",
    color: "orange",
    icon: IoWomanOutline,
  },
  {
    title: "Total new Employee",
    count: "1",
    color: "red",
    icon: AiOutlineUsergroupAdd,
  },
];

export const employee_job: IEmployee[] = [
  {
    name: "Luke Short",
    designation: "UI/UX Designer",
    img: manImg1,
    describe:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    name: "Lillian Powell",
    designation: "Quality Assurance",
    img: woman1,
    describe:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    name: "John Hardacare",
    designation: "Developer",
    img: manImg2,
    describe:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    name: "Rachel Parsons",
    designation: "Website Designer",
    img: woman2,
    describe:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    name: "Ziul Rahman",
    designation: "Full Stack Developer",
    img: manImg1,
    describe:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
];
