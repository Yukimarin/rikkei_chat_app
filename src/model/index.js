import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { last } from "lodash";
import { renderErrorMessage } from "../view/index";
export let displayName = (firstName, lastname) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    console.log(displayName);

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
};

export let updateProfile1 = (firstname, lastname) => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: `${firstname} ${lastname}`,
    photoURL: "",
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((err) => {
      // An error occurred
      // ...
    });
};

export let createNewUser = (firstname, lastname, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      renderErrorMessage("server-suc-message", "Đăng ký thành công");
      updateProfile1(firstname, lastname);
      setActiveScreen("loginPage");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server-err-message", err.message);
    });
};

export let Signin = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      renderErrorMessage("server-loginsuc-message", "Đăng nhập thành công");
      let username = document.getElementById("user");
      username.innerHTML = `<div>${displayName}</div>`;
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server-loginerr-message", err.message);
    });
};
