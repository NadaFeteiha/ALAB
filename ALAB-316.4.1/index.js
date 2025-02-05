// ALAB 316.4.1: Form Validation

// Regular Expressions
const whitespaceRegex = /\s/;
const specialCharsRegex = /[^a-zA-Z0-9_]/;

// Registration and elements
const registration = document.getElementById('registration');
const username = registration.elements.username;
const email = registration.elements.email;
const password = registration.elements.password;
const confirmPassword = registration.elements.passwordCheck;

// console.log(registration);


// email.addEventListener('focus', function () {
//     console.log('email focus');
//     checkUsername();
// });

// password.addEventListener('focus', function () {
//     checkUsername();
//     checkEmail();
// });

// confirmPassword.addEventListener('focus', function () {
//     checkUsername();
//     checkEmail();
//     checkPassword();
// });


// check username validation
function checkUsername() {
    const usernameValidation = validateUsername(username.value);
    if (!usernameValidation.isValid) {
        showError(usernameValidation.errors);
    }
}

// check email validation
function checkEmail() {
    if (email.value.length > 0) {
        const emailValidation = validateEmail(email.value);
        if (!emailValidation.isValid) {
            showError(emailValidation.errors);
        }
    }
}

// check password validation
function checkPassword() {
    const passwordValidation = validatePassword(password.value, username.value);
    if (!passwordValidation.isValid) {
        showError(passwordValidation.errors);
    }
}


// change the input fields to border color red when there is an error
registration.addEventListener('submit', function (event) {
    event.preventDefault();

    const allErrors = [];

    // check all 
    const checkUsername = validateUsername(username.value);
    const checkEmail = validateEmail(email.value);
    const checkPassword = validatePassword(password.value, username.value);
    const checkMatch = matchPasswords(password.value, confirmPassword.value);
    const terms = registration.elements.terms;

    // if success
    if (checkUsername.isValid && checkEmail.isValid && checkPassword.isValid && checkMatch && terms.checked) {
        errorDisplay.style.display = 'none';
        alert(`Registration successful 🎉 \nuserName: ${username.value} \nemail: ${email.value}`);
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

// add red outline when not valid input
function changeBorderColor(field, isValid) {
    console.log('changeBorderColor', field.value, isValid);
    if (!isValid) {
        field.style.outline = '2px solid red';
    } else {
        field.style = 'none';
    }
}

// remove error when in focus of the input field
registration.addEventListener('focusin', function (event) {
    console.log('focusin', event.target.tagName);
    if (event.target.tagName === 'INPUT') {
        event.target.style = 'none';
    }
});


// helper functions
function showError(messages) {
    if (messages.length === 0) {
        clearError();
    } else {
        errorDisplay.style.display = 'block';
        errorDisplay.innerHTML = messages.join('<br>');
    }
}

function clearError() {
    errorDisplay.style.display = 'none';
}

// Registration validation 
// TODO: 1.Username Validation
function validateUsername(username) {
    const errors = [];

    if (username.length === 0) {
        errors.push('Username cannot be blank');
    }

    if (username.length < 4 || username.length > 20) {
        errors.push('Username must be at least 4 characters long and less than 20 characters');
    }

    const uniqueChars = new Set(username);
    if (uniqueChars.size < 2) {
        errors.push('Username must contain at least two unique characters');
    }

    if (specialCharsRegex.test(username) || whitespaceRegex.test(username)) {
        errors.push('Username cannot contain any special characters or whitespace');
    }

    return {
        errors: errors,
        isValid: errors.length === 0
    }

}

// TODO: 2.Email Validation
function validateEmail(email) {
    const errors = [];

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
        errors.push('Email must be in the format');
    }
    let isExampleEmail = email.includes('example.com');

    if (isExampleEmail) {
        errors.push('Email cannot be example.com');
    }
    return {
        errors: errors,
        isValid: errors.length === 0
    }
}

// TODO: 3.Password Validation:

// example valid password: n0tA$tr0ngP@ssw0rd
function validatePassword(password, username) {
    const errors = [];

    if (password.length < 12 || password.length > 30) {
        errors.push('Password must be at least 12 characters long and less than 30 characters');
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        errors.push('Password must have at least one lowercase letter and one uppercase letter');
    }

    if (!/[0-9]/.test(password)) {
        errors.push('Password must have at least one number');
    }

    if (!specialCharsRegex.exec(password)) {
        errors.push('Password must have at least one special character');
    }

    if (password.toLowerCase().includes('password')) {
        errors.push('Password cannot contain the word "password"');
    }

    if (whitespaceRegex.test(password)) {
        errors.push('Password cannot contain whitespace');
    }

    if (password.includes(username)) {
        errors.push('Password cannot contain the username');
    }

    return {
        errors: errors,
        isValid: errors.length === 0
    }
}

function matchPasswords(password, confirmPassword) {
    return password === confirmPassword;
}

// TODO: 4.Terms and Conditions
// ******************* Login *********************
const login = document.getElementById('login');
console.log(login.elements);

login.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = login.elements.username.value;
    const password = login.elements.password.value;

    if (!isNotEmptyOrBlank(username) || !isNotEmptyOrBlank(password)) {
        if (!isNotEmptyOrBlank(username)) {
            this.username.focus();
        } else {
            this.password.focus();
        }
        showError(['Username and password cannot be blank']);
        return;
    }

    if (username === 'test' && password === 'test') {
        alert('🎉 Login successful 🎉');
    } else {
        alert('Login failed 😢');
    }
});

login.addEventListener('input', function (event) {
    clearError()
});


function isNotEmptyOrBlank(value) {
    return value.trim().length !== 0
}