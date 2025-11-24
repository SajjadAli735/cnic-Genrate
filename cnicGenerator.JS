var userName = document.getElementById("userName");
var email = document.getElementById("Email");
var age = document.getElementById("age");
var password = document.getElementById("Password");
var Contactno = document.getElementById("Contactno");
var Cnic = document.getElementById("Cnic");

// Error fields
var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var ageError = document.getElementById("ageError");
var passwordError = document.getElementById("passwordError");
var contactError = document.getElementById("ContactnoError");

function submit() {
  let hasError = false;

  // Username
  if (userName.value == "") {
    nameError.innerText = "please enter your username";
    hasError = true;
  } else if (userName.value.length < 5) {
    nameError.innerText = "must be greater than 5 letters";
    hasError = true;
  } else {
    nameError.innerText = "";
  }

  // Email
  if (email.value == "") {
    emailError.innerText = "please enter email address";
    hasError = true;
  } else if (!email.value.includes("@")) {
    emailError.innerText = "please enter valid email address";
    hasError = true;
  } else {
    emailError.innerText = "";
  }

  // Age
  if (age.value == "") {
    ageError.innerText = "please enter your age";
    hasError = true;
  } else if (age.value < 18) {
    ageError.innerText = "not able to get CNIC";
    hasError = true;
  } else {
    ageError.innerText = "";
  }

  // Password
  if (password.value == "") {
    passwordError.innerText = "please enter password";
    hasError = true;
  } else if (password.value.length < 8) {
    passwordError.innerText = "password must be greater than 8";
    hasError = true;
  } else {
    passwordError.innerText = "";
  }

  // Contact number
  if (Contactno.value == "") {
    contactError.innerText = "enter your contact number";
    hasError = true;
  } else if (Contactno.value.length < 11) {
    contactError.innerText = "contact number must be 11 digits";
    hasError = true;
  } else {
    contactError.innerText = "";
  }

  // If no error → generate CNIC
  if (hasError == false) {
    var a = (Math.random() * 10000000000000).toFixed(0);
    var cnic =
      a.toString().substring(0, 5) +
      "-" +
      a.toString().substring(5, 12) +
      "-" +
      a.toString().substring(12);

    Cnic.value = cnic; // output CNIC
  }
}
