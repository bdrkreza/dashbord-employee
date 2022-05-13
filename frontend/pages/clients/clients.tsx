import React, { useEffect, useState } from "react";
import { AddClient, ClientList, ClientTopBar } from "../../components";
import { IClient, IClientCount } from "../../Types";
import { client_api, TClient } from "../api/client_api";

export default function Clients() {
  const [client, setClient] = useState<IClient[]>([]);
  const [clientCount, setClientCount] = useState<IClientCount[]>([]);

  useEffect(() => {
    setClient(client_api);
    setClientCount(TClient);
  }, []);
  return (
    <div>
      <ClientTopBar data={clientCount} />
      <AddClient />
      <ClientList data={client} />
    </div>
  );
}
