import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const LoginGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const user = await signInWithPopup(auth, provider);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

export default LoginGoogle;
