import "./App.css";
import React, { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Searching from "./components/Searching";
import Sorting from "./components/Sorting";
import Images from "./components/Images";
import FlightItem from "./components/FlightItem";
import useDebounce from "./custom hook/useDebounce";

export const MyContext = createContext();

function App() {
  //const [state, dispatch] = useReducer(FlightReducer, initialState);
  const [filteredFlights, setFilteredFlights] = useState(null);
  const [showFlight, setShowFlight] = useState(false);
  const [userFlights, setUserFlights] = useState([]);

  const [filters, setFilters] = useState({
    flightDirection: "",
    scheduleDate: "",
    scheduleTime: "",
    flightName: "",
    airlineCode: "",
    includedelays: "false",
    route: "",
    page: "",
    sort: "",
  });

  // Uçuş bilgilerini API'den çekme
  let queryString = "";
  const debouncedSearchTerm = useDebounce(filters, 1000);
  useEffect(() => {
    if (filters.scheduleDate)
      queryString += `scheduleDate=${filters.scheduleDate}&`;
    if (filters.scheduleTime)
      queryString += `scheduleTime=${filters.scheduleTime}&`;
    if (filters.flightName) queryString += `flightName=${filters.flightName}&`;
    if (filters.flightDirection)
      queryString += `flightDirection=${filters.flightDirection}&`;
    if (filters.airlineCode)
      queryString += `airlineCode=${filters.airlineCode}&`;
    if (filters.route) queryString += `route=${filters.route}&`;
    if (filters.includedelays)
      queryString += `includedelays=${filters.includedelays}&`;
    if (filters.page) queryString += `page=${filters.page}&`;
    if (filters.sort) queryString += `sort=${filters.sort}&`;

    // Eğer queryString varsa API isteği yap
    if (queryString) {
      // queryString'in sonundaki '&' karakterini kaldır
      queryString = queryString.slice(0, -1);
    }

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        app_id: "877338fd",
        app_key: "d2468f538f8468d276b2dbe6a3318fa2",
        ResourceVersion: "v4",
      },
    };

    const url = `http://localhost:5000/api/flights?${queryString}`;
    console.log(url);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("filtered flights: ", data);
        setFilteredFlights(data);
      })
      .catch((error) =>
        console.error("Error fetching filtered flights:", error)
      );
  }, [debouncedSearchTerm]); // Filtreler değiştikçe çalışır

  // Filtreleri güncelleyen fonksiyon
  const updateFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <MyContext.Provider
      value={{
        filteredFlights,
        setFilteredFlights,
        filters,
        setFilters,
        showFlight,
        setShowFlight,
        setUserFlights
      }}
    >
      <div>
        <div className="">
          <Header />
          <div className="flex">
            <div className="w-3/4">
              <Searching />
              <div className="flex">
                <FlightItem />
                <Sorting />
              </div>
            </div>
            <Images />
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
