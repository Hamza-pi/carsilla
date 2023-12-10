import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  elements: {
    bar: {
      borderRadius: 999,
    },
  },

  scales: {
    x: {
      grid: {
        display: true,
        color: "#E2E1E1",
      },
    },
    y: {
      grid: {
        display: true,
        color: "#E2E1E1",
      },
    },
  },
  parsing: {
    yAxisKey: "value",
    xAxisKey: "month",
  },
  cornerRadius: 999,
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: [
        15000, 25000, 30000, 50000, 80000, 120000, 80000, 50000, 30000, 50000, 10000,
      ],
      backgroundColor: "#00193B",
      borderColor: "transparent",
      borderSkipped: false,
    },
    {
      label: "Expense",
      data: [8000, 12000, 15000, 25000, 40000, 60000, 40000, 25000, 15000, 12000, 13000],
      backgroundColor: "#E2E1E1",
      borderColor: "transparent",
      borderSkipped: false,
    },
  ],
};

const Chart = () => {
  return (
    <div className="w-full">
      <div className="flex sm:flex-row flex-col gap-2 items-center justify-between">
        <h3 className="font-bold text-[24px] leading-[36px] text-textDark py-4">
          Sales Statistics 2022
        </h3>
        <div className="legend flex items-center gap-x-3 text-sm leading-[20px] font-semibold text-textDark">
            <div className="legend flex items-center gap-x-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-textDark"></div>
                <p>Revenue</p>
            </div>
            <div className="legend flex items-center gap-x-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-bGrey"></div>
                <p>Expense</p>
            </div>
        </div>
      </div>
      <Bar id="chart" options={options} data={data} />
    </div>
  );
};

export default Chart;
