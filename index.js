// Writing a Function for validating the name.
const nameInput = document.getElementById("name")

function validatingName(){
    document.getElementById("nameHelp").classList.add("hidden");
if (nameInput.value.trim().length > 5){
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
    return true;
} else {
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    return false;
}}

// calling the name validation function by adding an event listener to the name input

nameInput.addEventListener("input", validatingName); // when user is typing
nameInput.addEventListener('blur', validatingName); // when user moves focus away from the input

// Writing a function for validating the email

const emailInput = document.getElementById("email")

function validatingEmail(){
    document.getElementById("emailHelp").classList.add("hidden")
    // function for counting the number of @'s
    function atSymbols(email) {
        let count = 0;
        for (let char of email) {
            if (char === '@') {
                count++;
            }
            
        }
        return count;
    }
    const email = emailInput.value.trim();
    const atCount = atSymbols(email);
    if (atCount === 1 && !email.startsWith("@") && !email.endsWith("@") && !email.includes(" ")){
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
        return true;
    } else{
        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");
        return false;
    }
}

// calling the email validation function by adding an event listener to the email input

emailInput.addEventListener("input", validatingEmail); // when user is typing
emailInput.addEventListener('blur', validatingEmail); // when user moves focus away from the input




// writing a function for validating the phone number

const phoneInput = document.getElementById("phone")

function validatingPhone() {
    document.getElementById("phoneHelp").classList.add("hidden");

    const pattern = /^\d{10}$/; // regex pattern for a 10 digit phone number
    
    if (pattern.test(phoneInput.value.trim())) {
        phoneInput.classList.remove("is-invalid");
        phoneInput.classList.add("is-valid");
        return true;
    } else {
        phoneInput.classList.remove("is-valid");
        phoneInput.classList.add("is-invalid");
        return false;
    }
}

// calling the phone validation function by adding an event listener to the phone input

phoneInput.addEventListener("input", validatingPhone); // when user is typing
phoneInput.addEventListener('blur', validatingPhone); // when user moves focus away from the input


// writing a function for validating the password

const passwordInput = document.getElementById("password")

function validatingPassword() {
    document.getElementById("passwordHelp").classList.add("hidden");
    const password = passwordInput.value.trim().toLowerCase();
    const userName = nameInput.value.trim().toLowerCase();
    
    if (password.length >= 8 && password !== "password" && password !== userName && !password.includes(" ")) {
        passwordInput.classList.remove("is-invalid");
        passwordInput.classList.add("is-valid");
        return true;
    } else {
        passwordInput.classList.remove("is-valid");
        passwordInput.classList.add("is-invalid");
        return false;
    }
}

passwordInput.addEventListener("input", fn => {
    validatingPassword();
    confirmPassword();
});
passwordInput.addEventListener("blur", validatingPassword);

// writing a function for confirming the password

const confirmInput = document.getElementById("confirm-pass")

function confirmPassword() {
    if (confirmInput.value.trim() === passwordInput.value.trim()) {
        confirmInput.classList.remove("is-invalid");
        confirmInput.classList.add("is-valid");
        return true;
    } else {
        confirmInput.classList.remove("is-valid");
        confirmInput.classList.add("is-invalid");
        return false;
    }
}

confirmInput.addEventListener("input", confirmPassword);
confirmInput.addEventListener("blur", confirmPassword);



const form = document.getElementById('form');

// function to check if valid details are entered else prevents form submission

form.addEventListener("submit", function(event) {
    if (validatingName() && validatingEmail() && validatingPassword() && validatingPhone() && confirmPassword()) {
        alert("Your Details are Successfully Submitted");
    } else {
        event.preventDefault(); // Prevent form submission if the details are not valid
        alert("Please enter the correct details!");
    }
});