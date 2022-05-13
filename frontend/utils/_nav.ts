import { AiFillProject, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { FiCoffee, FiUsers } from "react-icons/fi";
import { MdDashboard, MdManageAccounts } from "react-icons/md";

const _nav = [
  { title: "Dashboard", link: "/", icon: MdDashboard },
  { title: "Projects", link: "/project/projects", icon: AiFillProject },
  { title: "Employees", link: "/employee/employee", icon: FiUsers },
  { title: "Department", link: "/department/department", icon: FcDepartment },
  {
    title: "Management",
    link: "/management/management",
    icon: MdManageAccounts,
  },
  { title: "Holidays", link: "/holidays/holidays", icon: FiCoffee },
  {
    title: "Attendance",
    link: "/attendances/attendances",
    icon: BsPencilSquare,
  },
  { title: "Clients", link: "/clients/clients", icon: AiOutlineUser },
  { title: "Accounts", link: "/accounts/accounts", icon: BiBookAlt },
  { title: "Payroll", link: "/payroll/payroll", icon: FaUsers },
  { title: "Setting", link: "/settings/settings", icon: AiOutlineSetting },
];

export default _nav;
