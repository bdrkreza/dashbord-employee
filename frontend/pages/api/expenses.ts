import manImg1 from "../../public/man-1.svg";
import manImg2 from "../../public/man2.svg";
import woman2 from "../../public/woman-2.svg";
import woman1 from "../../public/woman1.svg";
import { IExpenses } from "../../Types";

export const expenses_api: IExpenses[] = [
  {
    expId: "01",
    amount: "5000",
    image: manImg1,
    item: "Internet Payment",
    order_by: "joan Dyer",
    date: "12/03/2021",
    from: "Airtel Portal",
    status: true,
  },
  {
    expId: "02",
    image: manImg2,
    item: "Keybord Order",
    amount: "1000",
    order_by: "Victor Dyer",
    date: "12/03/2021",
    from: "flipkart",
    status: true,
  },
  {
    expId: "03",
    image: woman2,
    item: "pen/book",
    amount: "6000",
    order_by: "ryan randall",
    date: "12/03/2021",
    from: "flipkart",
    status: false,
  },
  {
    expId: "04",
    image: woman1,
    item: "Internet Payment",
    amount: "5000",
    order_by: "joan Dyer",
    date: "12/03/2021",
    from: "Airtel Portal",
    status: true,
  },
  {
    expId: "05",
    image: manImg1,
    item: "Food",
    amount: "5000",
    order_by: "robert Anderson",
    date: "12/03/2021",
    from: "Airtel Portal",
    status: true,
  },
];
