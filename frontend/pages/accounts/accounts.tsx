import React, { useEffect, useState } from "react";
import { AddPayment } from "../../components";
import { IInVoices } from "../../Types";
import { invoices } from "../api/invoice";

export default function Accounts() {
  const [invoice, setInvoice] = useState<IInVoices[]>([]);

  useEffect(() => {
    setInvoice(invoices);
  }, []);
  return (
    <div>
      <AddPayment data={invoice} />
    </div>
  );
}
