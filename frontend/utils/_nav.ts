import { AiFillProject, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { FiCoffee, FiUsers } from "react-icons/fi";
import { MdDashboard, MdManageAccounts } from "react-icons/md";

const _nav = [
  { title: "Dashboard", link: "/", icon: MdDashboard },
  { title: "Projects", link: "/project/projects", icon: AiFillProject },
  { title: "Employees", link: "/employee/employee", icon: FiUsers },
  { title: "Management", link: "/management/requests", icon: MdManageAccounts },
  { title: "Holidays", link: "/holidays/holidays", icon: FiCoffee },
  {
    title: "Attendance",
    link: "/attendances/attendances",
    icon: BsPencilSquare,
  },
  { title: "Clients", link: "/clients/clients", icon: AiOutlineUser },
  { title: "Accounts", link: "/accounts/accounts", icon: BiBookAlt },
  { title: "Setting", link: "/settings/settings", icon: AiOutlineSetting },
];

export default _nav;
