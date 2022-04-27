import { signInWithEmailAndPassword } from "firebase/auth";
import "../../App.css";
import { auth } from "../../firebase";

const EmailSignIn = async (Email, Password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, Email, Password);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

export default EmailSignIn;
