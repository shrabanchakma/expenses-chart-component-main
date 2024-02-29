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

  return (
    <div className="w-full h-[100vh] bg-[#F7E9DC] grid place-items-center">
      <div className="w-[20rem] sm:w-[50rem]  md:w-[34rem]">
        {/* todo: heading */}
        <div className="flex justify-between py-[1rem] px-[1.2rem] md:py-[1.7rem]  md:px-[1.9rem] rounded-md md:rounded-2xl bg-[#EC755D] mb-3 ">
          <div className="text-white">
            <h1 className="text-normal  md:text-lg">My Balance</h1>
            <p className="font-bold text-xl md:text-3xl m-0">$921.48</p>
          </div>
          <img src={logo} alt={logo} />
        </div>
        {/* todo: chart */}
        {barChartData && barChartData.length ? (
          <BarChart barChartData={barChartData} />
        ) : (
          <p>Chart Not Found</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseChart;
