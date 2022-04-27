import { getAuth, signOut } from "firebase/auth";

const Logout = (props) => {
  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logoutSucess");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <button className={props.className} onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};
export default Logout;
