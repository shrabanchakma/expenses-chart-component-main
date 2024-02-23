import logo from "./assets/logo.svg";
const ExpenseChart = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] flex justify-center items-center bg-green-500">
      <div className="w-[540px]">
        {/* todo: heading */}
        <div className="flex justify-between py-[1.7rem] px-[2rem] rounded-2xl bg-[#EC755D] mb-10 ">
          <div className="text-white">
            <h1 className="font-medium text-lg mb-2">My Balance</h1>
            <p className="font-bold text-3xl">$921.48</p>
          </div>
          <img src={logo} alt={logo} />
        </div>
        {/* todo: chart */}
        <div className="h-[500px] bg-gray-500 "></div>
      </div>
    </div>
  );
};

export default ExpenseChart;
