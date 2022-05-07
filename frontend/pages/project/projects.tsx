import React from "react";
import { ProjectCard, ProjectList, ProjectTopBar } from "../../components";
import { team } from "../api/projectTeam";
interface IProject {
  projectName: string;
  image: string;
  color: string;
  stage: string;
  persistance: string;
  task: string;
  budget: string;
  date: string;
  teamLeader: string;
  team: {
    img: string;
  }[];
}
[];
export default function Projects() {
  const [project, setProject] = React.useState<IProject[]>([]);

  React.useEffect(() => {
    setProject(team);
  }, []);
  return (
    <div>
      <ProjectTopBar />
      <ProjectList />
      <ProjectCard project={project} />
    </div>
  );
}
