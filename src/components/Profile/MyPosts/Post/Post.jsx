import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.userMessage}>
        <img src={props.url} alt=""></img>
        <p className={s.message}>{props.message}</p>
      </div>
      <div className={s.likes}>
        <span>Likes {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
