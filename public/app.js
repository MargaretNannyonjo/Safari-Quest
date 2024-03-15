document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
});

const signIn = document.querySelector("#signUp-btn");
const logIn = document.querySelector("#logOut-btn");
const provider = new firebase.auth.GoogleAuthProvider();

function googleSignIn() {
  firebase.auth().signInWithPopup(provider);
}

function googleLogOut() {
  firebase.auth().signOut();
}

logIn.addEventListener("click", googleLogOut);
signIn.addEventListener("click", googleSignIn);
