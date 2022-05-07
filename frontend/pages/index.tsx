import type { NextPage } from "next";
import React from "react";
import {
  ClientSurvey,
  InvoiceTable,
  ProjectReportTable,
  ProjectSurvey,
  StatusCard,
} from "../components";
import { team } from "./api/projectTeam";
import { status } from "./api/status_api";

interface IProps {
  title: string;
  count: string;
  persistence: string;
  color: string;
  icon: any;
}

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

const Home: NextPage = () => {
  const [statusApi, setStatusApi] = React.useState<IProps[]>([]);
  const [project, setProject] = React.useState<IProject[]>([]);

  React.useEffect(() => {
    setStatusApi(status);
    setProject(team);
  }, []);

  return (
    <div>
      <StatusCard status={statusApi} />
      <ProjectSurvey />
      <ClientSurvey />
      <InvoiceTable />
      <ProjectReportTable project={project} />
    </div>
  );
};

export default Home;
