// Initialize Firebase
const config = {
    apiKey: "AIzaSyDtHcbvliuIuMrgN1Uof3WLgxBn92ATlpc",
    authDomain: "projetofirebase-df20c.firebaseapp.com",
    projectId: "projetofirebase-df20c",
    storageBucket: "projetofirebase-df20c.appspot.com",
    messagingSenderId: "169423907228",
    appId: "1:169423907228:web:1a0a2d7ec04e7fb98b0059",
    measurementId: "G-P7PGDYBP6K"
  };

firebase.initializeApp(config);

// Firebase Variables
var auth = firebase.auth();

// on state changed
auth.onAuthStateChanged(firebaseUser => {
  // check email
  if(firebaseUser){

    currentEmail.innerHTML = auth.currentUser.email
    currentEmail.style.display = 'block';
    singoutButton.style.display = 'block';
    singupForm.style.display = 'none';
  } else{
    singoutButton.style.display = 'none';
    singupForm.style.display = 'block';
    currentEmail.style.display = 'none';
  }

});


// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// signup form
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
var singoutButton = document.querySelector("#signout");
var currentEmail = document.querySelector("#current-email");

var singupForm = document.querySelector("#signup-form");
var userName = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var singupButton = document.querySelector("#signup");


singupButton.addEventListener("click", clickSignupButton);
singoutButton.addEventListener("click", clickSignoutButton);


function clickSignupButton(){

  //signup firebase method
  auth.createUserWithEmailAndPassword(email.value, password.value).
  then(function(user){
    console.log(auth.currentUser.email)


  }, function(error) {
    console.log(error.message);
    // error message show that you need to enable that authentication in firebase
  });

}

function clickSignoutButton(){
  auth.signOut()
}

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// singin form
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
var signinEmail = document.querySelector("#signinEmail");
var signinPassword = document.querySelector("#signinPassword");
var singinButton = document.querySelector("#signin");

singinButton.addEventListener("click", clickSigninButton);


function clickSigninButton() {

  auth.signInWithEmailAndPassword(signinEmail.value, signinPassword.value).
  then(function(user){
    console.log(user)
  }, function(error) {
    console.log(error.message);
    alert(error.message);
    // error message show that you need to enable that authentication in firebase
  });

}
