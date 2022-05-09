import React from "react";
import { AddProject, ProjectCard, ProjectList } from "../../components";
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
      <ProjectList />
      <AddProject />
      <ProjectCard project={project} />
    </div>
  );
}
