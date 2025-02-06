import { isEmptyOrBlank, } from './validation.js';
import { isUserExists, isSameUsernameMatchPassword, addUser } from './localStorage.js';
import { showError, clearError } from './error.js';

// ******************* Login *********************\\

const login = document.getElementById('login');

login.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    const keepLoggedIn = this.persist.checked;

    if (isEmptyOrBlank(username) || isEmptyOrBlank(password)) {
        if (!isEmptyOrBlank(username)) {
            this.username.focus();
        } else {
            this.password.focus();
        }
        showError(['Username and password cannot be blank']);
        return;
    }

    if (!isUserExists(username)) {
        console.log('User does not exist');
        showError(['User does not exist']);
        return;
    } else if (isSameUsernameMatchPassword(username, password)) {
        if (keepLoggedIn) {
            addUser(username, password);
            alert(`🎉 Login successful 🎉 \n Welcome  ${username} Your info saved correctly!`);
        } else {
            alert(`🎉 Login successful 🎉 \n Welcome  ${username}!`);
        }
        login.reset();
    } else {
        this.password.focus();
        showError(['Password is Wrong']);
    }
});

login.addEventListener('input', function (event) {
    clearError()
});
