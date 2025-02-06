import { validateUsername, validateEmail, validatePassword, matchPasswords } from './validation.js';
import { showError, clearError, changeBorderColor } from './error.js';
import { addUser } from './localStorage.js';

// Registration and elements
const registration = document.getElementById('registration');
const username = registration.elements.username;
const email = registration.elements.email;
const password = registration.elements.password;
const confirmPassword = registration.elements.passwordCheck;

// change the input fields to border color red when there is an error
registration.addEventListener('submit', function (event) {
    event.preventDefault();

    const allErrors = [];
    const usernameValue = username.value;
    const passwordValue = password.value;

    // check all 
    const checkUsername = validateUsername(usernameValue);
    const checkEmail = validateEmail(email.value);
    const checkPassword = validatePassword(passwordValue, usernameValue);
    const checkMatch = matchPasswords(passwordValue, confirmPassword.value);
    const terms = registration.elements.terms;

    // if success
    if (checkUsername.isValid && checkEmail.isValid && checkPassword.isValid && checkMatch && terms.checked) {
        clearError();
        addUser(usernameValue, passwordValue)
        alert(`Registration successful 🎉 \nuserName: ${usernameValue} \nemail: ${email.value}`);
        // clear the form
        registration.reset();
    } else {
        //change color if not valid
        changeBorderColor(username, checkUsername.isValid);
        changeBorderColor(email, checkEmail.isValid);
        changeBorderColor(password, checkPassword.isValid);
        changeBorderColor(confirmPassword, checkMatch);

        // if there error in one or more...
        allErrors.push(...checkUsername.errors);
        allErrors.push(...checkEmail.errors);
        allErrors.push(...checkPassword.errors);
        if (!checkMatch) {
            allErrors.push('Passwords do not match');
        }
        if (!terms.checked) {
            allErrors.push('You must agree to the terms and conditions');
        }
        showError(allErrors);
    }
});


// remove error when in focus of the input field
registration.addEventListener('focusin', function (event) {
    console.log('focusin', event.target.tagName);
    if (event.target.tagName === 'INPUT') {
        event.target.style = 'none';
    }
});
