import React, { useContext } from "react";
import Classes from "./Navbar.module.css";
import hotelIcon from "../../Assets/hotel_icon.png";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/context";
export const Navbar = () => {
  const { setLogout } = useContext(AuthContext);
  const signOut = () => {
    setLogout();
  };
  return (
    <div className={Classes.container}>
      <img className={Classes.Icon} src={hotelIcon} />
      <p className={Classes.hotel_Name}>Hotel Name</p>
      <NavLink className={Classes.NavLink} to="/home">
        Home
      </NavLink>
      <NavLink className={Classes.NavLink} to="/about">
        About
      </NavLink>
      <NavLink className={Classes.NavLink} to="//profile">
        Profile
      </NavLink>
      <NavLink className={Classes.NavLink} to="/contact">
        Contact
      </NavLink>
      <button className={Classes.button} onClick={signOut}>
        Logout
      </button>
    </div>
  );
};
