import React, { createContext, useContext, useEffect, useState } from "react";
import { Children } from "react/cjs/react.production.min";
import { userObserver } from "../auth/firebase";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState;
  useEffect(() => {
    userObserver();
  }, []);
  return (
    <AuthContext.Provider value={currentUser}>{Children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
