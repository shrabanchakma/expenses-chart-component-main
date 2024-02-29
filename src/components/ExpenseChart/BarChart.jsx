import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const BarChart = ({ barChartData = [] }) => {
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
    plugins: {
      legend: {
        display: false,
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
    <div className="relative h-[50vw] md:h-[10vw] border rounded-t-3xl bg-[#FFFCF7]">
      <h1 className="px-7 py-7 text-4xl font-bold text-[#422D1F]">
        Spending - Last 7 days
      </h1>
      <Bar data={data} options={options} className="bg-[#FFFCF7] px-6" />
      <div className="text-3xl bg-[#FFFCF7] px-6">
        <div className="divider m-0 pt-5 divider-neutral"></div>
        <div className="flex items-center justify-between py-10">
          {/* total  spending*/}
          <div>
            <h3 className="text-lg font-normal text-[#8E8882]">
              Total this month
            </h3>
            <p className="text-5xl font-bold">$478.33</p>
          </div>
          {/* percentage */}
          <div className="text-end">
            <h3 className="text-lg font-bold">+2.4%</h3>
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
