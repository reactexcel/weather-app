import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useLocationContext } from "../context/locationContext";

function MainPage() {
  const { callapi, geoData } = useLocationContext();
  const [zipCode, setZipCode] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [changevalue, setChangedValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (changevalue.value && zipCode) {
      callapi(zipCode, changevalue.value);
    } else {
      alert("Please select country code and zip code");
    }
  };
  const changeHandler = (value) => {
    setChangedValue({
      label: value.label,
      value: value.value,
    });
    setZipCode("");
  };

  const handleChangeZipCode = (zipcd) => {
    setZipCode(zipcd);
  };

  useEffect(() => {
    setChangedValue({
      label: geoData.countryData.label,
      value: geoData.countryData.value,
    });
    setZipCode(geoData.postalcode);
  }, [geoData.countryData]);

  return (
    <>
      <div className="min-h-screen py-24 place-items-center text-center bg-[#2c6fb3] text-white">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl font-semibold">Weather Forcast</h2>
          <div className="py-10 font-normal text-[#86a0ba]">
            Enter Norwegian zipcode below to get the <br /> current weather
            conditions for that area
          </div>
          <form onSubmit={handleClick}>
            <div className="flex my-10 items-center gap-x-1 w-full justify-center">
              <Select
                options={options}
                onChange={changeHandler}
                className="text-gray-500 w-[423px] text-left"
                placeholder="Select  Country"
                value={changevalue}
              />
            </div>
            <div className="flex my-10 items-center gap-x-1 w-full justify-center">
              <input
                type="number"
                inputmode="numeric"
                placeholder="Enter Zipcode..."
                className="px-4 py-1 focus:outline-none w-[330px] text-gray-500"
                onChange={(e) => handleChangeZipCode(e.target.value)}
                value={zipCode}
              />
              <button
                type="submit"
                className="bg-[#db5933] px-6 py-[4.4px] shadow-black shadow-sm"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MainPage;
