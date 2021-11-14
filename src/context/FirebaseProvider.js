import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const value = useFirebase();

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
