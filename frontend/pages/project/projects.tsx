import React from "react";
import { AddProject, ProjectCard, ProjectList } from "../../components";
import { IProject } from "../../Types";
import { team } from "../api/projectTeam";

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
