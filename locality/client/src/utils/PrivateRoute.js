import { Route, Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
    // let { user } = useContext(AuthContext);
    const user = false
    // return <Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>;
    return (
        <>
            {user ? <Outlet /> : <Navigate to="/login" />}

        </>
    )
}
export default PrivateRoute;