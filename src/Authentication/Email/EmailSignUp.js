import { createUserWithEmailAndPassword } from "firebase/auth";
import "../../App.css";
import { auth } from "../../firebase";

const EmailSignUp = async (Email, Password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, Email, Password);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};
export default EmailSignUp;
