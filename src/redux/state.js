const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Hi, how are you?",
          likesCount: 12,
          url: "https://cdn-icons-png.flaticon.com/512/1459/1459666.png",
        },
        {
          id: 2,
          message: "It's my first post",
          likesCount: 2,
          url: "https://cdn-icons-png.flaticon.com/512/6785/6785654.png",
        },
        // { id: 2, message: "It's my second post", likesCount: 2, url: 'https://cdn-icons-png.flaticon.com/512/4786/4786579.png',},
      ],
      newPostText: "Goldfinger",
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Oleg",
          avatar: "https://cdn-icons-png.flaticon.com/512/809/809052.png",
        },
        {
          id: 2,
          name: "Sveta",
          avatar: "https://cdn-icons-png.flaticon.com/512/1864/1864475.png",
        },
        {
          id: 3,
          name: "Kolya",
          avatar: "https://cdn-icons-png.flaticon.com/512/616/616451.png",
        },
        {
          id: 4,
          name: "Maksim",
          avatar: "https://cdn-icons-png.flaticon.com/512/826/826912.png",
        },
        {
          id: 5,
          name: "Kate",
          avatar: "https://cdn-icons-png.flaticon.com/512/1864/1864589.png",
        },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Yo" },
      ],
      newMessageText: "Finger is Gold",
    },
    friends: [
      {
        id: 3,
        name: "Kolya",
        avatar: "https://cdn-icons-png.flaticon.com/512/616/616451.png",
      },
      {
        id: 4,
        name: "Maksim",
        avatar: "https://cdn-icons-png.flaticon.com/512/826/826912.png",
      },
      {
        id: 5,
        name: "Kate",
        avatar: "https://cdn-icons-png.flaticon.com/512/1864/1864589.png",
      },
    ],
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  /*
  addPost() {
    const newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
      url: "https://cdn-icons-png.flaticon.com/512/1864/1864589.png",
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    const newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText,
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessage(newMs) {
    this._state.dialogsPage.newMessageText = newMs;
    this._callSubscriber(this._state);
  },

  */


  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
        url: "https://cdn-icons-png.flaticon.com/512/1864/1864589.png",
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
        const newMessage = {
          id: 4,
          message: this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        this._state.dialogsPage.newMessageText = action.newMs;
        this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
