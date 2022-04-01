import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const countrylocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [access, setacesss] = useState(false);
  const [apiData, setApiData] = useState();

  const [geoData, setGeoData] = useState({
    countryData: "",
    postalcode: "",
  });
  let navigate = useNavigate();
  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setGeoData({
          ...geoData,
          countryData: { value: data.country, label: data.country_name },
          postalcode: data.postal,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getGeoInfo();
  }, []);

  const callapi = async (zipcode, countrycode) => {
    try {
      const response = await axios.post(
        "https://weather-web1.herokuapp.com/weather/search",
        {
          zipCode: zipcode,
          countryCode: countrycode,
        }
      );
      if (response.data) {
        setacesss(true);
        setApiData(response.data);
        navigate("/forecast");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setacesss(true);
        navigate("/errorpg");
      }
    }
  };
  return (
    <countrylocationContext.Provider
      value={{ callapi, access, apiData, geoData }}
    >
      {children}
    </countrylocationContext.Provider>
  );
};

const useLocationContext = () => {
  return useContext(countrylocationContext);
};

export { LocationProvider, useLocationContext };
