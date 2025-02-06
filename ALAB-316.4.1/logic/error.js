
export function showError(messages) {
    if (messages.length === 0) {
        clearError();
    } else {
        errorDisplay.style.display = 'block';
        errorDisplay.innerHTML = messages.join('<br>');
    }
}

export function clearError() {
    errorDisplay.style.display = 'none';
}

// add red outline when not valid input
export function changeBorderColor(field, isValid) {
    console.log('changeBorderColor', field.value, isValid);
    if (!isValid) {
        field.style.outline = '2px solid red';
    } else {
        field.style = 'none';
    }
}