import type { NextPage } from "next";
import React from "react";
import { ClientSurvey, ProjectSurvey, StatusCard } from "../components";
import { status } from "./api/status_api";

interface IProps {
  title: string;
  count: string;
  persistence: string;
  color: string;
  icon: any;
}
const Home: NextPage = () => {
  const [statusApi, setStatusApi] = React.useState<IProps[]>([]);

  React.useEffect(() => {
    setStatusApi(status);
  }, []);

  return (
    <div>
      <StatusCard status={statusApi} />
      <ProjectSurvey />
      <ClientSurvey />
    </div>
  );
};

export default Home;
