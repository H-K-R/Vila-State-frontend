import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import axios from "axios";

initializeFirebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getUser(user.email);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsub;
  }, [auth]);

  const registerUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          addUserToDb(email);
          setUser(user);
        });
      })
      .catch((error) => console.log(error));
  };

  const signInUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => setUser(user))
      .catch((error) => console.log(error));
  };

  const signOutUser = () => {
    signOut(auth).then(() => setUser(null));
  };

  const addUserToDb = (email) => {
    axios
      .post("https://boiling-plains-50382.herokuapp.com/user", { email })
      .then((res) => console.log(res));
  };

  const getUser = (email) => {
    axios
      .get(`https://boiling-plains-50382.herokuapp.com/user?email=${email}`)
      .then((res) => setUserRole(res.data.role));
  };

  return {
    user,
    signOutUser,
    loading,
    registerUser,
    signInUser,
    userRole,
  };
};

export default useFirebase;
