// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhK3eL-oTKEbEIlKCGhfA_GDP-4Fpevkg",
  authDomain: "instan-t.firebaseapp.com",
  databaseURL: "https://instan-t.firebaseio.com",
  projectId: "instan-t",
  storageBucket: "instan-t.appspot.com",
  messagingSenderId: "652856288522",
  appId: "1:652856288522:web:800bf8333f28fedf5b86f3",
  measurementId: "G-H0B56Z3EPH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/**
 *
 */
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
