import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";

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
