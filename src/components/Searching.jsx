import React, { useContext, useState } from "react";
import PLaneFilled from "../assets/icons/planeFilled.svg";
import Plane from "../assets/icons/plane.svg";
import Calender from "../assets/icons/calender.svg";
import { MyContext } from "../App";

const Searching = () => {
  const { setFilters,setShowFlight } =
    useContext(MyContext);
  const [arriveDeparture, setarriveDeparture] = useState(null);

  const updateFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const setArrive = () => {
    setarriveDeparture("arrive");
    updateFilter("flightDirection", "A");
  };
  const setDeparture = () => {
    setarriveDeparture("departure");
    updateFilter("flightDirection", "D");
  };

  const handleShowFlight = () => {
    setarriveDeparture((prev) => !prev);
  };
  return (
    <div className="border-2 border-red-300">
      <div className="flex justify-between p-2 my-2">
        <div className="flex gap-1 items-center ">
          <img src={PLaneFilled} className="rotate-90 h-6" alt="" />
          <p className="text-lg text-gray-700 font-semibold border-2 ">
            BOOK YOUR FLIGHT
          </p>
        </div>
        <div className="flex ">
          <button
            className={`${
              arriveDeparture == "arrive"
                ? "bg-purple-700 text-white"
                : "bg-purple-200 text-purple-700"
            } p-2 rounded-l-full`}
            onClick={setArrive}
          >
            Arrive
          </button>
          <button
            className={`${
              arriveDeparture == "departure"
                ? "bg-purple-700 text-white"
                : "bg-purple-200 text-purple-700"
            } p-2 rounded-r-full`}
            onClick={setDeparture}
          >
            Departure
          </button>
        </div>
      </div>
      <div className="flex my-4">
        <div className="flex border gap-2 border-gray-400 w-1/4 p-1 rounded-l-full">
          <img src={Plane} alt="" className="rotate-45 ml-4" />
          <input
            type="text"
            placeholder="To Where"
            disabled={arriveDeparture == "departure"}
            onChange={(e) => updateFilter("route", e.target.value)}
          />
        </div>
        <div className="flex border gap-2 border-gray-400 w-1/4 p-1 rounded-r-full">
          <img src={Plane} alt="" className=" rotate-135 ml-4" />
          <input
            type="text"
            placeholder="From Origin"
            disabled={arriveDeparture == "arrive"}
            onChange={(e) => updateFilter("route", e.target.value)}
          />
        </div>
        <div className="flex gap-2 border border-gray-400 w-1/4 p-1 rounded-l-full">
          <img src={Calender} alt="" className=" ml-4" />
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            disabled={arriveDeparture == "departure"}
            onChange={(e) => updateFilter("scheduleDate", e.target.value)}
          />
        </div>
        <div className="flex gap-2 border border-gray-400 w-1/4 p-1 rounded-r-full">
          <img src={Calender} alt="" className=" ml-4" />
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            disabled={arriveDeparture == "arrive"}
            onChange={(e) => updateFilter("scheduleDate", e.target.value)}
          />
        </div>
      </div>
        <button onClick={setShowFlight(true)} className=" bg-purple-700 p-2 text-white mt-3 rounded-md">
          Show Flights
        </button>
    </div>
  );
};

export default Searching;
