import React, { useContext } from "react";
import { MyContext } from "../App";
import DoubleRight from "../assets/icons/doubleRight.svg"
import Plane from "../assets/icons/plane.svg";

const FlightItem = () => {
  const { filters, filteredFlights,setUserFlights } = useContext(MyContext);

  const handleAddFlight = (flight) => {
    setUserFlights((prevFlights) => [...prevFlights, flight]);
  };
  //console.log(filteredFlights.flights);
  return (
    <div className="w-4/5  bg-[#f3f2f6] ">
      {filteredFlights?.flights.map((flight, i) => {
        return (
          <div key={flight.flightName} className="flex p-4 items-center  justify-between border-2 rounded-lg bg-white m-8 hover:shadow-xl transition-transform duration-300 hover:scale-105">
             
              <div className="flex flex-col items-center">
                {filters.flightDirection == "A" ? (
                  <p className="text-xl font-semibold">Amsterdam - {flight.route.destinations}</p>
                ) : (
                  <p>{flight.route.destinations} - Amsterdam</p>
                )}
                <p>Departure</p>
                <p className="text-xl font-semibold">{flight.scheduleTime}</p>
                <p className="flex">
                  Airport :
                  {filters.flightDirection == "A" ? (
                    <p>SCH</p>
                  ) : (
                    <p>{flight.route.destinations} </p>
                  )}
                </p>
                <p className="text-xl font-semibold text-purple-700" >Price: $236</p>
               
            </div>
            <div className="flex justify-between h-full w-1/2  ">
                  <img src={DoubleRight} alt="" className="w-8" />
                  <div className=" flex flex-col items-center ">
                        <img src={Plane} alt="" className="rotate-90 w-8" />
                        <p>2h 25m Nonstop</p>
                  </div>
                  <img src={DoubleRight} alt="" className="w-8" />

            </div>
            <div className="flex flex-col items-center bottom-0 " >
                  <p>Arrive</p>
                  <p className="text-xl font-semibold">{flight?.estimatedLandingTime?.substring(11,19) }</p>
                  <p className="flex">
                    Airport :
                    {filters.flightDirection == "A"
                     ? flight.route.destinations
                      : "SCH"}
                  </p>
                  <p className="text-xl font-semibold text-purple-700">Price: $236</p>
                  <button onClick={(flight)=>handleAddFlight(flight)} className="bg-purple-700 p-2 rounded-md text-white cursor-pointer">Book Flight</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlightItem;
