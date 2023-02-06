import React, { useEffect, useState } from "react";

const FilterData = ({ setInitialDate, setEndDate, chekOne, chekTwo }) => {
  const [resultUSDm, setResultUSDm] = useState(true);
  const [resultUSDton, setResultUSDton] = useState(true);
  const yearOptions = [2020, 2021, 2022, 2023, 2024, 2025];
  const yearLabels = yearOptions.map((year) => `${year}`);

  const monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [selectedYearInit, setSelectedYearInit] = useState(yearOptions[0]);
  const [selectedMonthInit, setSelectedMonthInit] = useState(monthOptions[1]);
  const [selectedYearEnd, setSelectedYearEnd] = useState(yearOptions[3]);
  const [selectedMonthEnd, setSelectedMonthEnd] = useState(monthOptions[1]);

  useEffect(() => {
    // setSelectedYearInit(yearOptions[0]);
    // setSelectedMonthInit(monthOptions[1]);
    // setSelectedYearEnd(yearOptions[3]);
    // setSelectedMonthEnd(monthOptions[1]);
    handleFilter();
  }, []);

  const monthLabels = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const handleFilter = () => {
    console.log("on filter");
    setInitialDate({
      month: selectedMonthInit,
      year: selectedYearInit,
    });
    setEndDate({
      month: selectedMonthEnd,
      year: selectedYearEnd,
    });
    chekOne(resultUSDm);
    chekTwo(resultUSDton);
  };

  return (
    <div className="flex flex-col items-start mt-6 ">
      <div className="flex flex-row mb-4 w-full items-center justify-between ">
        <label
          htmlFor="month"
          className="min-w-fit mr-2 font-medium text-sm text-stone-600"
        >
          Mes:
        </label>
        <select
          id="month"
          className="mt-2 block w-fit bg-slate-100 rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          value={selectedMonthInit}
          onChange={(e) => setSelectedMonthInit(e.target.value)}
        >
          {monthOptions.map((month, index) => (
            <option key={index} value={month}>
              {monthLabels[index]}
            </option>
          ))}
        </select>
        <label
          htmlFor="year"
          className="min-w-fit mr-2 font-medium text-sm text-stone-600"
        >
          Año:
        </label>
        <select
          id="year"
          className="mt-2 block w-24 bg-slate-100 rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          value={selectedYearInit}
          onChange={(e) => setSelectedYearInit(e.target.value)}
        >
          {yearOptions.map((year, index) => (
            <option key={index} value={year}>
              {yearLabels[index]}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row mb-4 w-full items-center justify-between ">
        <label
          htmlFor="month"
          className="min-w-fit mr-2 font-medium text-sm text-stone-600"
        >
          Mes:
        </label>
        <select
          id="month"
          className="mt-2 block w-fit bg-slate-100 rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          value={selectedMonthEnd}
          onChange={(e) => setSelectedMonthEnd(e.target.value)}
        >
          {monthOptions.map((month, index) => (
            <option key={index} value={month}>
              {monthLabels[index]}
            </option>
          ))}
        </select>
        <label
          htmlFor="year"
          className="min-w-fit mr-2 font-medium text-sm text-stone-600"
        >
          Año:
        </label>
        <select
          id="year"
          className="mt-2 block w-24 bg-slate-100 rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          value={selectedYearEnd}
          onChange={(e) => setSelectedYearEnd(e.target.value)}
        >
          {yearOptions.map((year, index) => (
            <option key={index} value={year}>
              {yearLabels[index]}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row mb-4 w-full ">
        <label
          htmlFor="toggle"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            id="toggle"
            type="checkbox"
            className="sr-only peer"
            checked={resultUSDm}
            onChange={() => setResultUSDm(!resultUSDm)}
          />

          <div
            className="w-9 h-5
             bg-slate-200 
             dark:bg-slate-400
            after:bg-white
             peer-checked:bg-[#f14a3f]
             after:border 
             after:rounded-full 
             after:h-4 
             peer-hover:outline-none 
             peer-focus:ring-2
             rounded-full 
           peer 
           peer-checked:after:translate-x-full 
           after:content-[''] 
           after:absolute 
           after:top-[3.5px] 
           after:left-[2px] 
            after:w-4 
            after:transition-all
            "
          ></div>
        </label>
        <label className="font-semibold ml-2">USDM</label>
      </div>

      <div className="flex flex-row mb-4 w-full ">
        <label
          htmlFor="toggle2"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            id="toggle2"
            type="checkbox"
            className="sr-only peer"
            checked={resultUSDton}
            onChange={() => setResultUSDton(!resultUSDton)}
          />

          <div
            className="w-9 h-5
             bg-slate-200 
             dark:bg-slate-400
            after:bg-white
             peer-checked:bg-[#f14a3f]
             after:border 
             after:rounded-full 
             after:h-4 
             peer-hover:outline-none 
             peer-focus:ring-2
             rounded-full 
           peer 
           peer-checked:after:translate-x-full 
           after:content-[''] 
           after:absolute 
           after:top-[3.5px] 
           after:left-[2px] 
            after:w-4 
            after:transition-all
            "
          ></div>
        </label>
        <label className="font-semibold ml-2">USD_TON</label>
      </div>

      <button
        className="bg-[#f14a3f] p-2 rounded-lg text-white my-2 w-full hover:bg-red-400"
        onClick={handleFilter}
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterData;
