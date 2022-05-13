import { Doughnut } from "react-chartjs-2";
import { FaFingerprint } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

type Props = {};

const work = [
  {
    work: "80",
    color: "#5eead4",
  },
  {
    work: "20",
    color: "#cbd5e1",
  },
];

const data = {
  datasets: [
    {
      data: work.map((w) => w.work),
      backgroundColor: work.map((c) => c.color),
      borderWidth: 2,
      cutout: "80%",
      text: "23%",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  cutoutPercentage: 84,
};

export default function TodayTimeProgressBar({}: Props) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <FaFingerprint className="w-6 h-6 text-green-300" />
          <h1 className="font-bold text-sm ml-2">Punching: 10:00 Am</h1>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Punch Out
        </button>
      </div>

      <div className="flex items-center justify-center mb-5 relative">
        <Doughnut options={options} data={data} width={150} height={200} />
        <div className="absolute text-center">
          <h1 className="text-lg font-bold ">Working</h1>
          <h1 className="text-lg">80%</h1>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex items-center">
          <IoFastFoodOutline className="h-6 w-6 text-pink-300" />
          <h1 className="font-bold text-sm ml-2">Break: 1:10 Hr</h1>
        </div>
        <div className="flex items-center">
          <IoFastFoodOutline className="h-6 w-6 text-pink-300" />
          <h1 className="font-bold text-sm ml-2">Break: 1:10 Hr</h1>
        </div>
      </div>
    </div>
  );
}
