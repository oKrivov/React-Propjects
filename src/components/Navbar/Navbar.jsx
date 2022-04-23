import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  // console.log(props);
  return (
    <nav className={`${s.nav} ${props.className}`}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        >
          Settings
        </NavLink>
      </div>
      <Friends friends={props.state.friends}/>
    </nav>
  );
};

export default Navbar;
