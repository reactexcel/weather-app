import React from "react";
import Cloud from "../assets/cloud.png";
import { Link } from "react-router-dom";
import { useLocationContext } from "../context/locationContext";
const Forecast = () => {
  const contextApiData = useLocationContext();
  let temperature = Math.trunc(contextApiData.apiData.main.temp);
  let windspeed = Math.trunc(contextApiData.apiData.wind.speed);
  return (
    <>
      <div className="min-h-screen py-24 place-items-center text-center bg-[#2c6fb3] text-white">
        <Link
          to="/"
          className="bg-gray-400 px-6 py-[4.4px] shadow-gray shadow-sm"
        >
          Home
        </Link>

        <div className="bg-white text-gray-500 flex justify-center items-center flex-col w-72 m-auto my-10 py-10">
          <img src={Cloud} alt="cloud img" className="w-20" />
          <p className="text-3xl">{temperature}°</p>
          <h2 className="mt-1 mb-10">
            {contextApiData.apiData.weather[0].description}
          </h2>

          <div className="flex justify-between w-full px-5 content-center items-center">
            <div>
              {" "}
              <p className="text-sm">
                Humidity:{contextApiData.apiData.main.humidity}%
              </p>
            </div>
            <div>
              <p className="text-sm">Wind Speed: {windspeed}mph</p>
            </div>
          </div>
        </div>
        <p className="text-[#7b92ab]">
          Location | {contextApiData.apiData.name}
        </p>
      </div>
    </>
  );
};

export default Forecast;
