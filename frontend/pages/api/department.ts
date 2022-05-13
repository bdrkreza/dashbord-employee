import { FaDev } from "react-icons/fa";
import { MdBusiness, MdManageAccounts } from "react-icons/md";
import { SiMicrosoftteams } from "react-icons/si";
import { VscAccount, VscGraph } from "react-icons/vsc";
import man1 from "../../public/man-1.svg";
import man2 from "../../public/man2.svg";
import woman2 from "../../public/woman-2.svg";
import woman1 from "../../public/woman1.svg";
import { IDepartment, IDepartmentTeam } from "../../Types";
export const department_api: IDepartment[] = [
  {
    name: "Account & Finance",
    person: 2,
    icon: MdManageAccounts,
    color: "green",
  },
  {
    name: "HRM",
    person: 3,
    icon: VscAccount,
    color: "pink",
  },
  {
    name: "Business development",
    person: 10,
    icon: MdBusiness,
    color: "orange",
  },
  {
    name: "UX/UI Design",
    person: 5,
    icon: VscGraph,
    color: "blue",
  },
  {
    name: "Software Development",
    person: 15,
    icon: SiMicrosoftteams,
    color: "purple",
  },
  {
    name: "Dev Ops",
    person: 8,
    icon: FaDev,
    color: "teal",
  },
];

export const department_team: IDepartmentTeam[] = [
  {
    id: "01",
    team_head: "ziaul Huda",
    department: "Web Development",
    under_work: "10",
    color: "orange",
    image: man1,
  },
  {
    id: "02",
    team_head: "John Hardacare",
    department: "UX/UI Design",
    color: "purple",
    under_work: "5",
    image: man2,
  },
  {
    id: "03",
    team_head: "Lillian Powell",
    department: "dev Ops",
    color: "teal",
    under_work: "8",
    image: woman1,
  },
  {
    id: "04",
    color: "pink",
    team_head: "Reachel Parsons",
    department: "Business Development",
    under_work: "10",
    image: woman2,
  },
];
