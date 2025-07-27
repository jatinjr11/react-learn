// components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const PrivateRoute = ({ children }) => {
    // console.log();
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
