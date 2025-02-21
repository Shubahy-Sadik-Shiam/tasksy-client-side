import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
      return (
        <div className="flex justify-center items-center py-60">
          <progress className="progress w-56"></progress>
        </div>
      );
    }
    if (user) {
      return children;
    }
    return <Navigate to="/"></Navigate>;
};

export default PrivateRoute;