import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./auth_provider";

export const ProtectedRoute = () => {
    const { token } = useAuth();
  
    // Check if the user is authenticated
    if (!token) {
      localStorage.removeItem("isAdmin")
      localStorage.removeItem("token")
      // If not authenticated, redirect to the login page
      return <Navigate to="/" />;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };