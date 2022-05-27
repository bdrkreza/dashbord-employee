import type { NextPage } from "next";
import React from "react";
import {
  ClientSurvey,
  InvoiceTable,
  ProjectReportTable,
  ProjectSurvey,
  StatusCard,
} from "../components";
import { IInVoices, IProject, IStatus } from "../Types";
import { invoices } from "./api/invoice";
import { team } from "./api/projectTeam";
import { status } from "./api/status_api";

const Home: NextPage = () => {
  const [statusApi, setStatusApi] = React.useState<IStatus[]>([]);
  const [project, setProject] = React.useState<IProject[]>([]);
  const [invoice, setInvoice] = React.useState<IInVoices[]>([]);

  React.useEffect(() => {
    setStatusApi(status);
    setProject(team);
    setInvoice(invoices);
  }, []);

  return (
    <div>
      <StatusCard status={statusApi} />
      <ProjectSurvey />
      <ClientSurvey />
      <InvoiceTable data={invoice} />
      <ProjectReportTable project={project} />
    </div>
  );
};

export default Home;
