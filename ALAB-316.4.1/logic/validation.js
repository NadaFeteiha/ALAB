// Registration validation 

// Regular Expressions
const whitespaceRegex = /\s/;
const specialCharsRegex = /[^a-zA-Z0-9_]/;

// TODO: 1.Username Validation
export function validateUsername(username) {
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
export function validateEmail(email) {
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
export function validatePassword(password, username) {
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

export function matchPasswords(password, confirmPassword) {
    return password === confirmPassword;
}

export function isEmptyOrBlank(value) {
    return value.trim().length === 0
}