import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import google from "../../Assets/google.png";
import phone from "../../Assets/phone.png";
import facebook from "../../Assets/facebook.png";
import { Facebooklogin } from "../../Authentication/Facebook/Facebooklogin";
import LoginGoogle from "../../Authentication/Google/LoginGoogle";
import Phone from "../../Authentication/Phone/Phone";
import EmailSignUp from "../../Authentication/Email/EmailSignUp";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
export const Signup = () => {
  const { setLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPhone, setShowPhone] = useState(false);
  const loginWithPhone = async (Data) => {
    const data = await Data;
    setLogin(data.user.accessToken);
  };
  const loginWithGoogle = async () => {
    const data = await LoginGoogle();
    setLogin(data.user.accessToken);
  };
  const loginWithFacebook = async () => {
    const data = await LoginGoogle();
    setLogin(data.user.accessToken);
  };
  const login = async () => {
    const data = await EmailSignUp(Email, Password);
    setLogin(data.user.accessToken);
  };
  const loginPageHandler = () => {
    navigate("/login");
  };
  return (
    <div className={style.container}>
      {showPhone && (
        <Phone onConfirm={() => setShowPhone(false)} data={loginWithPhone} />
      )}
      <div className={style.innercontainer}>
        <div className={style.leftContainer}>
          <img className={style.logo} src={"https://picsum.photos/200"} />
        </div>
        <div className={style.rightContainer}>
          <h1>Sign-up</h1>
          <label>Email</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
          <label>Password</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
          <button onClick={login}>Signup</button>
          <div className={style.aligndiv}>
            <p className={style.haveAccount}>Have an account?</p>
            <p onClick={loginPageHandler} className={style.signuptext}>
              Login
            </p>
          </div>
          <p>----------or----------</p>
          <div className={style.otheritems}>
            <img
              className={style.otherLogo}
              src={google}
              onClick={loginWithGoogle}
            ></img>
            <img
              className={style.otherLogo}
              src={facebook}
              onClick={loginWithFacebook}
            />
            <img
              className={style.otherLogo}
              src={phone}
              onClick={() => setShowPhone(true)}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
