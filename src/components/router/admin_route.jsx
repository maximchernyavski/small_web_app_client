import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "./auth_provider";
import checkToken from "../../utils/checkToken";

export const AdminRoute = () => {
    const { token } = useAuth();

    const [isValidToken, setIsValidToken] = useState(false);

    useEffect(() => {
        (async () => {
            const isValidToken = await checkToken();
            setIsValidToken(isValidToken);
        }) ();
    }, [isValidToken])
  
    // Check if the user is authenticated
    if (!isValidToken) {

      localStorage.removeItem("token")
      localStorage.removeItem("isAdmin")
      // If not authenticated, redirect to the login page
      return <Navigate to="/" />;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };