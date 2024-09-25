import React, { useContext } from "react";
import { MyContext } from "../App";

function Sorting() {
  const { filters, setFilters } = useContext(MyContext);
  const updateFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const buttons= [
      { label: "Asc Flight ID", value: "%2BflightName" },
      { label: "Desc Flight ID", value: "-flightName" },
      { label: "Asc Schedule Time", value: "%2BscheduleTime" },
      { label: "Desc Schedule Time", value: "-scheduleTime" },
      { label: "Asc Schedule Date", value: "%2BscheduleDate" },
      { label: "Desc Schedule Date", value: "-scheduleDate" },
      { label: "Asc Airline Code", value: "%2BairlineCode" },
      { label: "Desc Airline Code", value: "-airlineCode" }
    ];
  return (
      <div className="flex flex-col bg-[#f3f2f6] items-end pt-8">
            <p className="text-xl font-semibold mr-8">Sort By:</p>
      {buttons.map((option) => (
        <label key={option.value} className="inline-flex items-center mr-4 ">
          <input
            type="radio"
            name="sort"
            value={option.value}
            onChange={(e) => updateFilter("sort", e.target.value)}
            className="hidden peer"
          />
          <span className="peer-checked:bg-[rgb(126,34,206)] peer-checked:text-white peer-checked:border-transparent border-b-2 border-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-purple-300 hover:text-purple-700">
            {option.label}
          </span>
        </label>
      ))}
    </div>
    
  );
}

export default Sorting;
