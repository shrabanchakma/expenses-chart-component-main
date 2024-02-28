import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const BarChart = ({ barChartData = [] }) => {
  //   console.log(barChartData);

  const barBox = {
    id: "barBox",
    afterDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { top, bottom },
        data,
        scales: { x, y },
      } = chart;
      ctx.save();

      //   console.log(chart.getDatasetMeta(0).data[0].active);
    },
  };

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
    plugins: [barBox],
    onHover: (e, chartElement) => {
      if (chartElement.length === 1) {
        console.log(e.native.target);
        e.native.target.style.cursor = "pointer";
      } else {
        e.native.target.style.cursor = "default";
      }
    },
  };
  return (
    <Bar
      data={data}
      options={options}
      plugins={[barBox]}
      className="bg-white"
    />
  );
};

export default BarChart;
