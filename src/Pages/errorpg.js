import React from "react";
import Locationalert from "../assets/locationalert.png";
import { Link } from "react-router-dom";
const ErrorPg = () => {
  return (
    <>
      <div className="min-h-screen py-24 place-items-center text-center bg-[#2c6fb3] text-white">
        <div className="bg-white text-gray-500 flex justify-center items-center flex-col w-96 m-auto my-10 py-10">
          <img src={Locationalert} alt="cloud img" className="w-24" />
          <div className="py-10 font-normal">
            Whao! Look like there was an error
            <br /> with your zipcode
          </div>
          <Link
            to="/"
            className="bg-[#db5933] px-6 py-[4.4px] shadow-black shadow-sm text-white"
          >
            Try Again
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPg;
