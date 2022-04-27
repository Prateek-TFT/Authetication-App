import classes from "./Phone.module.css";
import React, { useState } from "react";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const [no, setno] = useState();
  const [OtpVisible, setOtpVisible] = useState(false);
  const [otp, setotp] = useState();
  const loginHandler = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "visible",
        callback: (response) => {
          setOtpVisible(true);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
    let appverifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91${no}`, appverifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => console.log(error));
  };
  const verifyotp = () => {
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        // props.data(user);
        // {data(user)}
        props.data(user);

        // ...
      })
      .catch((error) => {
        console.log(error);
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <div className={classes.modal}>
      <h2>Login Using Phone</h2>
      {!OtpVisible && <p>Phone number</p>}
      {!OtpVisible && (
        <input minLength={10} onChange={(e) => setno(e.target.value)} />
      )}
      {!OtpVisible && <button onClick={loginHandler}>Get-Otp</button>}
      {!OtpVisible && <div id="sign-in-button"></div>}
      {OtpVisible && <h4>ENTER OTP</h4>}
      {OtpVisible && (
        <input minLength={6} onChange={(e) => setotp(e.target.value)}></input>
      )}
      {OtpVisible && (
        <button onClick={props.onConfirm} onClickCapture={verifyotp}>
          Submit
        </button>
      )}
    </div>
  );
};

const Phone = (props) => {
  const getData = (d) => {
    props.data(d);
  };
  return (
    <React.Fragment>
      <Backdrop onConfirm={props.onConfirm} />
      <ModalOverlay onConfirm={props.onConfirm} data={getData}>
        {props.children}
      </ModalOverlay>
    </React.Fragment>
  );
};

export default Phone;
