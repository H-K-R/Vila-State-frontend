import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCa7IUE-pEZ2sW3krGW4eSDWz3AEcps3CM",
  authDomain: "vilastate-19586.firebaseapp.com",
  projectId: "vilastate-19586",
  storageBucket: "vilastate-19586.appspot.com",
  messagingSenderId: "928162982691",
  appId: "1:928162982691:web:3d2febde9ddd3d1120ba96",
};

const initializeFirebaseApp = () => {
  return initializeApp(firebaseConfig);
};

export default initializeFirebaseApp;
