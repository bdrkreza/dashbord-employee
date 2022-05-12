import type { NextPage } from "next";
import React from "react";
import {
  ClientSurvey,
  InvoiceTable,
  ProjectReportTable,
  ProjectSurvey,
  StatusCard,
} from "../components";
import { IProject, IStatus } from "../Types";
import { team } from "./api/projectTeam";
import { status } from "./api/status_api";

const Home: NextPage = () => {
  const [statusApi, setStatusApi] = React.useState<IStatus[]>([]);
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
