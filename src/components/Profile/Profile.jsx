import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {
  // console.log(props);
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        // state={props.state}
        posts={props.profilePage.posts}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
