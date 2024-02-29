import { Bar } from "react-chartjs-2";
import { Chart, registerables, Tooltip } from "chart.js";
import { useRef } from "react";
Chart.register(...registerables, Tooltip);

const BarChart = ({ barChartData = [] }) => {
  const chartRef = useRef(null);
  const labels = barChartData.map((dataItem) => dataItem.day);
  const chartData = barChartData.map((dataItem) => dataItem.amount);
  console.log(Tooltip.positioners);

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: "#EC755D",
        borderRadius: 5,
        borderSkipped: false,
        hoverBackgroundColor: "#76B5BC",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        xAlign: "center",
        yAlign: "center",
        displayColors: false,
        backgroundColor: "#3B2214",
        padding: 6,
        bodyFont: {
          size: 18,
          weight: "bold",
        },
        callbacks: {
          title: () => "",
          label: (toolTipItem) => "$" + toolTipItem.raw,
        },
        position: "average",
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
    },
    onHover: (e, chartElement) => {
      if (chartElement.length === 1) {
        e.native.target.style.cursor = "pointer";
      } else {
        e.native.target.style.cursor = "default";
      }
    },
  };
  return (
    <div className="rounded-md md:rounded-3xl  bg-[#FFFCF7] px-3 md:p-7">
      <h1 className="py-3  text-xl md:pb-5 md:text-4xl font-bold text-[#422D1F]">
        Spending - Last 7 days
      </h1>
      {/* bar chart */}
      <div className="relative h-[25vh] w-[80vw]  md:h-[21vh] md:w-[25vw]  ">
        <Bar
          data={data}
          options={options}
          ref={chartRef}
          className="bg-[#FFFCF7] px-6"
        />
      </div>
      <div className="text-3xl bg-[#FFFCF7] rounded-md md:rounded-b-3xl py-5">
        <div className="divider m-0 py-5 md:py-8 "></div>
        <div className="flex items-center justify-between ">
          {/* total  spending*/}
          <div>
            <h3 className="text-lg font-normal text-[#8E8882] mb-3 md:mb-0">
              Total this month
            </h3>
            <p className="text-3xl md:text-5xl font-bold">$478.33</p>
          </div>
          {/* percentage */}
          <div className="text-end">
            <h3 className="text-lg font-bold ">+2.4%</h3>
            <p className="text-[#8E8882] text-lg font-normal">
              from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
