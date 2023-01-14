import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase";
import { ref, set, push } from "firebase/database";
import { database } from "../../firebase";

// fungsi asynchronous callback
export const actionUsername = (callback) => {
  return setTimeout(() => {
    return callback({ type: "CHANGE_USER", value: "Riandro Raul" });
  }, 2000);
};

export const registerUserApi = (data) => (callback) => {
  callback({ type: "CHANGE_LOADING", value: true });
  return createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      callback({ type: "CHANGE_LOADING", value: false });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      callback({ type: "CHANGE_LOADING", value: false });
    });
};

export const loginUserAPI = (data) => (callback) => {
  return new Promise((resolve, reject) => {
    callback({ type: "CHANGE_LOADING", value: true });
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // log in
        // const user = userCredential.user;
        const dataUser = {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          emailVerified: userCredential.user.emailVerified,
          refreshToken: userCredential.user.refreshToken,
        };
        console.log(userCredential);
        callback({ type: "CHANGE_LOADING", value: false });
        callback({ type: "CHANGE_ISLOGIN", value: true });
        callback({
          type: "CHANGE_USER",
          value: dataUser,
        });
        resolve(dataUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        callback({ type: "CHANGE_LOADING", value: false });
        reject(false);
      });
  });
};

export const addDataToAPi = (data) => (dispatch) => {
  push(ref(database, "notes/" + data.userId), {
    title: data.title,
    content: data.content,
    date: data.date,
  });
};
