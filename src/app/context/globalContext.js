'use client'
import React, { useContext, createContext, useState, useEffect } from "react"
import axios from "axios";
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [forecast, setForecast] = useState({});
    //forecast
    async function fetchForecast () {
        try {
            const res = await axios.get('api/weather');
            setForecast(res.data);
          } catch (error) {
            console.log("Error fetching forecast data: ", error.message);
          }
    }
    useEffect(() => {
        fetchForecast();
    }, [])
    return (
        <GlobalContext.Provider value={{forecast}}>
            <GlobalContextUpdate.Provider>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);