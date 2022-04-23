import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";
import s from "./Friends.module.css";

const Friends = (props) => {

  const friends = props.friends.map((d) => (<DialogItem state={d} className={s.friend}/>))

  return (
    <div className="friends">
      <h4 className="friends-title">Friends</h4>

      <div className={s.friendsContent}>
        {friends}
      </div>

    </div>
  );
};

export default Friends;
