import React, { useState } from "react";

export const AuthContext = React.createContext({
  isLogin: false,
  idToken: "",
  setLogin: () => {},
  setLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("Token"));

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("Token", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("Token");
  };

  const contextData = {
    isLogin: userIsLoggedIn,
    idToken: token,
    setLogin: loginHandler,
    setLogout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
};
