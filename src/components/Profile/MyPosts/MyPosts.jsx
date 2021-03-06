import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
  // console.log(props);
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} url={p.url} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={s.myPosts}>
      <h3 className="">My posts</h3>
      <div className={s.newPost}>
        <div className="">
          <textarea
            onChange={onPostChange}
            rows="3"
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div className="">
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
