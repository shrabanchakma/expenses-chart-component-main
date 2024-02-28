import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const BarChart = ({ barChartData = [] }) => {
  //   console.log(barChartData);
  const labels = barChartData.map((dataItem) => dataItem.day);
  const chartData = barChartData.map((dataItem) => dataItem.amount);
  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: "#EC755D",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  return <Bar data={data} options={options} className="bg-white" />;
};

export default BarChart;
