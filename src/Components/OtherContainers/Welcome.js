import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../UI/Navbar";
import Classes from "./Welcome.module.css";
import bg from "../../Assets/Hotelpic.png";
export const Welcome = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(true);
  setTimeout(() => {
    setState(false);
    navigate("/home");
  }, 5000);
  return (
    <div className={Classes.container}>
      <Navbar />
      {state ? (
        <div className={Classes.box}>
          <h1 className={Classes.h1}>Welcome to H.M.S</h1>
          <img className={Classes.img} src={bg} />
        </div>
      ) : (
        <div className={Classes.displaydiv}>
          <Outlet />
        </div>
      )}
    </div>
  );
};
