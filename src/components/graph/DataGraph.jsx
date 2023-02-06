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

const DataGraph = ({
  element,
  realData,
  projectedData,
  onChekOne,
  onChekTwo,
}) => {
  // console.log(realData);
  // console.log(projectedData);
  if (!realData || !projectedData) return null;

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
      title: { text: element, display: true },
    },
  };

  const formatDate = (month, year) => {
    const months = [
      "ENE",
      "FEB",
      "MAR",
      "ABR",
      "MAY",
      "JUN",
      "JUL",
      "AGO",
      "SEP",
      "OCT",
      "NOV",
      "DIC",
    ];
    return `${months[month - 1]} ${year}`;
  };

  realData = realData
    .sort((a, b) => (a.mes > b.mes ? -1 : 1))
    .sort((a, b) => (a.anio > b.anio ? 1 : -1));
  projectedData = projectedData
    .sort((a, b) => (a.mes > b.mes ? -1 : 1))
    .sort((a, b) => (a.anio > b.anio ? 1 : -1));

  let realLabels = [];
  const labelsReal = realData.map((item) => {
    return formatDate(item.mes, item.anio);
  });
  const labelsProyected = projectedData.map((item) => {
    return formatDate(item.mes, item.anio);
  });
  realLabels = [...labelsReal, ...labelsProyected];

  const realResultados_USDM = realData.map((d) => {
    return {
      x: formatDate(d.mes, d.anio),
      y: d.resultado_USDM,
    };
  });

  const proyectedResultados_USDM = projectedData.map((d) => {
    return {
      x: formatDate(d.mes, d.anio),
      y: d.resultado_USDM,
    };
  });
  const realResultados_USD_TON = realData.map((d) => {
    return {
      x: formatDate(d.mes, d.anio),
      y: d.resultado_USD_TON,
    };
  });

  const proyectedResultados_USD_TON = projectedData.map((d) => {
    return {
      x: formatDate(d.mes, d.anio),
      y: d.resultado_USD_TON,
    };
  });

  const chartData = {
    labels: realLabels,
    datasets: [
      {
        label: "",
        data: onChekOne ? realResultados_USDM : [],
        borderColor: onChekOne ? "rgb(255, 99, 132)" : "",
        backgroundColor: onChekOne ? "rgba(255, 99, 132, 0.5)" : "",
        borderWidth: 1,
        ineTension: 0.1,
        fill: false,
      },
      {
        label: "",
        data: onChekOne ? proyectedResultados_USDM : [],
        borderColor: onChekOne ? "rgb(255, 159, 64)" : "",
        backgroundColor: onChekOne ? "rgba(255, 159, 64, 0.5)" : "",
        borderWidth: 1,
        ineTension: 0.1,
        fill: false,
      },
      {
        label: "",
        data: onChekTwo ? realResultados_USD_TON : [],
        borderColor: onChekTwo ? "rgb(53, 162, 235)" : "",
        backgroundColor: onChekTwo ? "rgba(53, 162, 235, 0.5)" : "",
        borderWidth: 1,
        ineTension: 0.1,
        fill: false,
      },
      {
        label: "",
        data: onChekTwo ? proyectedResultados_USD_TON : [],
        borderColor: onChekTwo ? "rgb(75, 192, 192)" : "",
        backgroundColor: onChekTwo ? "rgba(75, 192, 192, 0.5)" : "",
        borderWidth: 1,
        ineTension: 0.1,
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
