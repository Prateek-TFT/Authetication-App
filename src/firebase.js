import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqxDp_FBUkzWve385JFurBP1tBQoJcu1k",
  authDomain: "newapp-ea5c8.firebaseapp.com",
  projectId: "newapp-ea5c8",
  storageBucket: "newapp-ea5c8.appspot.com",
  messagingSenderId: "1065716550818",
  appId: "1:1065716550818:web:bc60ee1db5aeb19d525bfb",
};
export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
