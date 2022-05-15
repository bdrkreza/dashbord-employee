import manImg1 from "../../public/man-1.svg";
import manImg2 from "../../public/man2.svg";
import woman2 from "../../public/woman-2.svg";
import woman1 from "../../public/woman1.svg";
import { IInVoices } from "../../Types";

export const invoices: IInVoices[] = [
  {
    company: "AgilSoft Tech",
    invoiceId: "#IN7865",
    name: "john doe",
    start_date: "12/05/2020",
    end_date: "15/05/2020",
    status: true,
    amount: "500",
    image: manImg1,
    color: "green",
  },
  {
    invoiceId: "#IN7865",
    company: "Macrosoft",
    name: "Carrie Anthony",
    start_date: "15/05/2020",
    end_date: "1/05/2020",
    status: false,
    image: manImg2,
    amount: "500",
    color: "red",
  },
  {
    invoiceId: "#IN7865",
    company: "Google",
    name: "john doe",
    start_date: "13/05/2020",
    end_date: "18/05/2020",
    status: true,
    image: woman2,
    amount: "500",
    color: "orange",
  },
  {
    invoiceId: "#IN7865",
    company: "Design Tech",
    name: "john doe",
    start_date: "12/05/2020",
    end_date: "15/05/2020",
    status: true,
    image: woman1,
    amount: "500",
    color: "green",
  },
  {
    invoiceId: "#IN7865",
    company: "Deltasoft Tech",
    name: "john doe",
    start_date: "12/05/2020",
    end_date: "15/05/2020",
    amount: "500",
    status: false,
    image: woman1,
    color: "red",
  },
];
