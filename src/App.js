import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  // console.log(props);
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar className={"block-style"} state={props.state} />
      <div className="app_wrapper_content block-style">
        <Routes>
          <Route
            path="/dialogs"
            element={
              <Dialogs
                state={props.state.dialogsPage}
                addMessage={props.addMessage}
                updateNewMessage={props.updateNewMessage}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                // state={props.state}
                profilePage={props.state.profilePage}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
