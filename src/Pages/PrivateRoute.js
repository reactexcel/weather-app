import { Navigate } from "react-router-dom";
import { useLocationContext } from "../context/locationContext";

const PrivateRoute = ({ children }) => {
  const { access } = useLocationContext();
  return access ? children : <Navigate to="/" />;
};

export default PrivateRoute;
