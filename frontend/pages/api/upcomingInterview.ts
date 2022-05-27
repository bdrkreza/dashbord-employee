import man1 from "../../public/man-1.svg";
import man2 from "../../public/man2.svg";
import woman2 from "../../public/woman-2.svg";
import woman1 from "../../public/woman1.svg";
export type IInterview = {
  id: number;
  name: string;
  department: string;
  time: string;
  color: string;
  image: string;
};

export const interview: IInterview[] = [
  {
    id: 1,
    name: "ziaul Huda",
    department: "Web Development",
    time: "1.30-1.30",
    color: "orange",
    image: man1,
  },
  {
    id: 2,
    name: "John Hardacare",
    department: "UX/UI Design",
    color: "purple",
    time: "9.00-1.30",
    image: man2,
  },
  {
    id: 3,
    name: "Lillian Powell",
    department: "dev Ops",
    color: "teal",
    time: "1.30-2.30",
    image: woman1,
  },
  {
    id: 4,
    color: "pink",
    name: "Reachel Parsons",
    department: "Business Development",
    time: "1.30-2.30",
    image: woman2,
  },
];
