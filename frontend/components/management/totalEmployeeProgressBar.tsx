import { Doughnut } from "react-chartjs-2";

type Props = {};

const work = [
  {
    work: "60",
    color: "#5eead4",
  },
  {
    work: "40",
    color: "#ff85bb",
  },
];

const data: any = {
  labels: ["Man", "Woman"],
  datasets: [
    {
      data: work.map((w) => w.work),
      backgroundColor: work.map((c) => c.color),
      borderWidth: 2,
      cutout: "70%",
      text: "23%",
    },
  ],
};

const options: any = {
  maintainAspectRatio: false,
  responsive: true,
  cutoutPercentage: 60,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true, //for style circle
      },
    },
  },
};

export default function TotalEmployeeProgressBar({}: Props) {
  return (
    <div>
      <div className="flex items-center justify-center  relative">
        <Doughnut options={options} data={data} width={150} height={200} />
        <div className="absolute text-center">
          <h1 className="text-lg font-bold ">Person</h1>
          <h1 className="text-2xl">45</h1>
        </div>
      </div>
    </div>
  );
}
