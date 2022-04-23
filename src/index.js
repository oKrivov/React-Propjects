import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import store from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));


const renderEntireTree = (state) => {
// console.log(store);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state} 
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
          addMessage={store.addMessage.bind(store)}
          updateNewMessage={store.updateNewMessage.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
renderEntireTree(store.getState());

store.subscribe(renderEntireTree)

reportWebVitals();
