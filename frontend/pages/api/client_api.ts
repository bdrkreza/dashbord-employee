import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { ImManWoman } from "react-icons/im";
import manImg1 from "../../public/man-1.svg";
import manImg2 from "../../public/man2.svg";
import woman2 from "../../public/woman-2.svg";
import woman1 from "../../public/woman1.svg";
import { IClient, IClientCount } from "../../Types";

export const TClient: IClientCount[] = [
  {
    title: "Total Client",
    count: "26",
    color: "green",
    icon: HiUserGroup,
  },
  {
    title: "Total New Client",
    count: "15",
    color: "blue",
    icon: ImManWoman,
  },
  {
    title: "Total Old client",
    count: "10",
    color: "orange",
    icon: ImManWoman,
  },
  {
    title: "Total cancel Client",
    count: "1",
    color: "red",
    icon: AiOutlineUsergroupAdd,
  },
];

export const client_api: IClient[] = [
  {
    id: "01",
    company: "AgilSoft Tech",
    name: "Ryan Ogden",
    designation: "CEO",
    img: manImg1,
    describe:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    id: "02",
    company: "Macrosoft",
    name: "Matt Gibson",
    designation: "Manager",
    img: woman1,
    describe:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    id: "03",
    company: "Google",
    name: "John Hardacare",
    designation: "HRM",
    img: manImg2,
    describe:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    id: "04",
    company: "Design Tech",
    name: "Rachel Parsons",
    designation: "CEO",
    img: woman2,
    describe:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    id: "05",
    company: "Deltasoft Tech",
    name: "Lauren Reid",
    designation: "Manager",
    img: manImg1,
    describe:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
];
