import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1586703451808-7c99c0877c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div >ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
