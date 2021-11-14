import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseProvider";

const useAuth = () => {
  return useContext(FirebaseContext);
};

export default useAuth;
