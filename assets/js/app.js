import { firebaseConfig } from "./config";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
const auth = firebase.auth();
const btnLoginFB = document.querySelector("#fb");
const btnLoginGoogle = document.querySelector("#Google");
const messageHome = document.querySelector("#message");
const signUpFB = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(facebookProvider).then((result) => {
    console.log(result.user);
    message.innerHTML = `Bonjour ${result.user.displayName}<br><img src="${result.user.photoURL}" class="profile" />`;
  });
};
const signUpGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider).then((result) => {
    console.log(result.user);
    message.innerHTML = `Bonjour ${result.user.displayName}<br><img src="${result.user.photoURL}" class="profile" />`;
  });
};
btnLoginFB.addEventListener("click", signUpFB);
btnLoginGoogle.addEventListener("click", signUpGoogle);
