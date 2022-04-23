import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  // console.log(props);
  const dialogElements = props.state.dialogs.map((d) => (
    <DialogItem state={d} />
  ));
  const messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator())
  };

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>{dialogElements}</div>
      <div className={s.messagesContainer}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.newMessage}>
          <div className={s.textMessage}>
            <textarea
              onChange={onMessageChange}
              rows="3"
              ref={newMessageElement}
              value={props.state.newMessageText}
            ></textarea>
          </div>
          <div className={s.messageBtn}>
            <button onClick={addMessage}>New message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
