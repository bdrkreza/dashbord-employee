import { BsHexagonHalf } from "react-icons/bs";
import { FaBan } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineHolidayVillage, MdWatchLater } from "react-icons/md";
import { IAttendance, IAttendanceTable } from "../../Types";

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

export const tableBody: IAttendanceTable[] = [
  {
    id: "01",
    date: "june 26,2022",
    punchIn_time: "10:05 Am",
    punchOut_time: "06:00 Pm",
    break_time: "01:12 Hr",
    half_day: true,
    full_day: false,
    over_time: "01:39 Hr",
    total: "09:39 Hr",
  },
  {
    id: "02",
    date: "june 26,2022",
    punchIn_time: "10:05 Am",
    punchOut_time: "06:00 Pm",
    break_time: "01:12 Hr",
    half_day: false,
    full_day: true,
    over_time: "01:39 Hr",
    total: "09:39 Hr",
  },
  {
    id: "03",
    date: "june 26,2022",
    punchIn_time: "10:05 Am",
    punchOut_time: "06:00 Pm",
    break_time: "01:12 Hr",
    half_day: false,
    full_day: true,
    over_time: "01:39 Hr",
    total: "09:39 Hr",
  },
  {
    id: "04",
    date: "june 26,2022",
    punchIn_time: "10:05 Am",
    punchOut_time: "06:00 Pm",
    break_time: "01:12 Hr",
    half_day: false,
    full_day: true,
    over_time: "01:39 Hr",
    total: "09:39 Hr",
  },
  {
    id: "05",
    date: "june 26,2022",
    punchIn_time: "10:05 Am",
    punchOut_time: "06:00 Pm",
    break_time: "01:12 Hr",
    half_day: false,
    full_day: true,
    over_time: "01:39 Hr",
    total: "09:39 Hr",
  },
];
