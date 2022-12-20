When it comes to challanges in JS we can not pass without doing form challange for sure. My last challange was validating form.

-About Project-
There is a form with inputs and every input have different validation rule. Email input has to have email format, telephone input has to have 123-456-7891 etc. Every input have different error message if you skip or fill wrong. Until fill all of them correctly you can finally click the submit button.
If you are filling one are you can see red border or if you didn't fill the input correctly you will have error messages however don't worry when you fill the input correctly the form will confir you with green color.

-Code Sample-
Biggest challanges of the project are regex!
```
const validatePhoneNumber = (phoneNumber) => 
{ 
    return /[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(String(phoneNumber)); 
}
```
You can see simple example validatePhoneNumber(). This function will check if you fill the input correctly every time you click the submit button.

    if (!validatePhoneNumber(phoneNumberInput.value)) {
        validForm = false;
        phoneNumberInputError.textContent = `A valid Telephone number (11 digits and 333-333-3334)`
     } else {
        phoneNumberInput.style.border = '2px solid green';
        phoneNumberInputError.style.display = 'none';
     }

Every input have different control but same type of error and color for warning or confirm you.
