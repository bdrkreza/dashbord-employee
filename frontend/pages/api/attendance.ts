import { BsHexagonHalf } from "react-icons/bs";
import { FaBan } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineHolidayVillage, MdWatchLater } from "react-icons/md";
import { IAttendance } from "../../Types";

export const attn_api: IAttendance[] = [
  {
    title: "Total Working day",
    days: "31",
    color: "blue",
    icon: GrWorkshop,
  },
  {
    title: "Present Tody's",
    days: "24",
    color: "green",
    icon: GiPresent,
  },
  {
    title: "Absent Tody's",
    days: "2",
    color: "red",
    icon: FaBan,
  },
  {
    title: "Half Tody's",
    days: "0",
    color: "orange",
    icon: BsHexagonHalf,
  },
  {
    title: "Late Tody's",
    days: "2",
    color: "red",
    icon: MdWatchLater,
  },
  {
    title: "Holiday's",
    days: "5",
    color: "pink",
    icon: MdOutlineHolidayVillage,
  },
];
