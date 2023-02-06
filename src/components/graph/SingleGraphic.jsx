import React from "react";
// import Chart from "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DataGraph = ({ data }) => {
  if (!data.serie_B && !data.serie_A) return null;
  // if (
  //   data.serie_A.y.lenght &&
  //   data.serie_A.x.lenght &&
  //   data.serie_B.y.lenght &&
  //   data.serie_B.x.lenght
  // )
  //   return null;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 10,
          fontColor: "black",
        },
      },
      // title: { text: element, display: true },
    },
  };

  const chartData = {
    labels: data.serie_A.x,
    datasets: [
      {
        label: "Serie A",
        data: data.serie_A.y,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Serie B",
        data: data.serie_B.y,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };
  return (
    <div className="w-full">
      <Line data={chartData} options={{ ...options }} />
    </div>
  );
};

export default DataGraph;
