import Mainpage from "./Pages/MainPage";
import Forecast from "./Pages/forecast";
import ErrorPg from "./Pages/errorpg";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./Pages/PrivateRoute";
import { NotFound } from "./Pages/notFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route
        path="forecast"
        element={
          <PrivateRoute>
            <Forecast />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
      <Route
        path="errorpg"
        element={
          <PrivateRoute>
            {" "}
            <ErrorPg />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
