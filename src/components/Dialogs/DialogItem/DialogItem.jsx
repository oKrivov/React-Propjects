import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = `/dialogs/${props.state.id}`;
  return (
    <div className={s.dialog}>
      <div className={s.avatar}>
        <img src={props.state.avatar}></img>
      </div>
      <NavLink to={path}>{props.state.name}</NavLink>
    </div>
  );
};

export default DialogItem;
