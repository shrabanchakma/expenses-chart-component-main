import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import BarChart from "./BarChart";
const ExpenseChart = () => {
  const [barChartData, setBarChartData] = useState([]);
  async function getBarChartData() {
    try {
      const res = await fetch("data.json");
      const data = await res.json();
      setBarChartData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getBarChartData();
  }, []);
  console.log(barChartData);

  return (
    <div className="w-[100vw] min-h-[100vh] flex justify-center items-center bg-green-500">
      <div className="w-[34rem]">
        {/* todo: heading */}
        <div className="flex justify-between py-[1.7rem] px-[2rem] rounded-2xl bg-[#EC755D] mb-3 ">
          <div className="text-white">
            <h1 className="font-medium text-lg mb-2">My Balance</h1>
            <p className="font-bold text-3xl">$921.48</p>
          </div>
          <img src={logo} alt={logo} />
        </div>
        {/* todo: chart */}
        <div className="h-[500px] bg-gray-500 rounded-3xl">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;
