import React, {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
import checkToken from "../../utils/checkToken";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    if (!token) return;

    (async () => {
      const isValidToken = await checkToken();
      setIsValidToken(isValidToken);
    }) ();

    if (isValidToken) {
      localStorage.setItem('token',token);
      return
    } /*else {
      localStorage.removeItem('token')
      localStorage.removeItem('isAdmin')
      return
    }*/
  }, [token]);

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;