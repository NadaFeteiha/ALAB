// ******************* local Storage  *********************

export function isSameUsernameMatchPassword(username, password) {
    if (isUserExists(username)) {
        let passwordLocal = localStorage.getItem(username.toLowerCase());
        return passwordLocal === password;
    }
    return false;
}

export function isUserExists(username) {
    return localStorage.getItem(username.toLowerCase()) !== null;
}

export function addUser(username, password) {
    if (isUserExists(username)) {
        return false;
    } else {
        localStorage.setItem(username.toLowerCase(), password);
        return true;
    }
}