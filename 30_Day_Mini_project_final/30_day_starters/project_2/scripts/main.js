const userForm = document.getElementById('userForm');
const firstNameInput = document.getElementById('fname'); //  document.forms["userForm"]["fname"]
const lastNameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneNumberInput = document.getElementById('telephone');
const bioInput = document.getElementById('bio');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailInputError = document.getElementById('emailError');
const passwordInputError = document.getElementById('passwordError');
const phoneNumberInputError = document.getElementById('numberError');
const bioInputError = document.getElementById('bioError');

const validForm = false;

userForm.addEventListener('submit', (e) => {
    
    e.preventDefault();
    if (isFormValid()) {

    }
})


function isFormValid() {
    let validForm = true;
    if( typeof( firstNameInput.value ) !== 'string' || (firstNameInput.value).length < 3 || (firstNameInput.value).length > 16) {
        validForm = false;
         firstNameError.textContent = `First name must be alphanumeric and contain 3 - 16 characters`
     } else {
         firstNameInput.style.border = '2px solid green';
         firstNameError.style.display = 'none';
     }

     if( typeof( lastNameInput.value ) !== 'string' || (lastNameInput.value).length < 3 || (lastNameInput.value).length > 16) {
        validForm = false;
        lastNameError.textContent = `Last name must be alphanumeric and contain 3 - 16 characters`
     } else {
        lastNameInput.style.border = '2px solid green';
        lastNameError.style.display = 'none';
     }

     if(!validateEmail(emailInput.value)) {
        validForm = false;
        emailInputError.textContent = `Email mus be a valid address, e.g. example@example.com`
     } else {
        emailInput.style.border = '2px solid green';
        emailInputError.style.display = 'none';
     }

     if (validatePassword(passwordInput.value) || (passwordInput.value).length < 6 || (passwordInput.value).length > 20 ) {
        validForm = false;
        passwordInputError.textContent = `Password must be alphanumeric (@, _ and - are also allowed) and between 6- 20 characters`
     } else {
        passwordInput.style.border = '2px solid green';
        passwordInputError.style.display = 'none';
     }

     if (!validatePhoneNumber(phoneNumberInput.value)) {
        validForm = false;
        phoneNumberInputError.textContent = `A valid Telephone number (11 digits and 333-333-3334)`
     } else {
        phoneNumberInput.style.border = '2px solid green';
        phoneNumberInputError.style.display = 'none';
     }
      
     if(!valitadeBio(bioInput.value) || (bioInput.value).length < 8 || (bioInput.value).length > 50 ) {
        validForm = false;
        bioInputError.textContent = `Bio must contain only lowecase letters, underscores, hyphens and be 8 - 50 characters`
     } else {
        bioInput.style.border = '2px solid green';
        bioInputError.style.display = 'none'
     }

    
     return validForm;
}

const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String(email));
};

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(String(password));
}

const validatePhoneNumber = (phoneNumber) => {
    return /[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(String(phoneNumber));
}

const valitadeBio = (bioText) => {
    return /[a-z0-9_-]/.test(String(bioText));
}