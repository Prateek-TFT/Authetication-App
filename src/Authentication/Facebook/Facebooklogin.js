import { auth } from "../../firebase";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";

export const Facebooklogin = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const user = await signInWithPopup(auth, provider);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};
