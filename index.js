// Exported export async functions for validation

/**
 * Validate if a value is not empty.
 * @param {string} value - The value to validate.
 * @param {string} fieldName - The name of the field being validated.
 * @returns {(boolean|string)} - True if the value is not empty, an error message otherwise.
 */
export async function validateNotEmpty(value, fieldName) {
    if (!value || value.trim() === '') {
        return `${fieldName} cannot be empty`;
    }

    return true;
}

/**
 * Validate if a string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {(boolean|string)} - True if the email is valid, an error message otherwise.
 */
export async function validateEmail(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email) ? true : `${email} email is Invalid`;
}


/**
 * Validate if a string contains only alphanumeric characters.
 * @param {string} input - The string to validate.
 * @returns {(boolean|string)} - True if the string is alphanumeric, an error message otherwise.
 */
export async function validateAlphanumeric(input) {
    // Implement alphanumeric validation logic
    // This example uses a regular expression to check if the string contains only letters and numbers
    return /^[a-zA-Z0-9]+$/.test(input) ? true : 'Only alphanumeric characters are allowed';
}

/**
 * Validate if a string is a valid mobile number.
 * @param {string} mobileNumber - The mobile number to validate.
 * @returns {(boolean|string)} - True if the mobile number is valid, an error message otherwise.
 */
export async function validateMobileNumber(mobileNumber) {
    // Regular expression for a simple mobile number validation
    const mobileNumberRegex = /^\d{10}$/;

    return mobileNumberRegex.test(mobileNumber) ? true : `${mobileNumber} This mobile number is Invalid`;
}


/**
* Validate if a string is a strong password.
* @param {string} password - The password to validate.
* @returns {(boolean|string)} - True if the password is strong, an error message otherwise.
*/
export async function validatePassword(password) {
    // Password criteria
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check if password meets the criteria
    if (
        password.length >= minLength &&
        hasUppercase &&
        hasLowercase &&
        hasDigit &&
        hasSpecialChar
    ) {
        return true;
    }

    return 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.';
}

/**
 * Validate if a string is a valid URL.
 * @param {string} url - The URL to validate.
 * @returns {(boolean|string)} - True if the URL is valid, an error message otherwise.
 */
export async function validateURL(url) {
    // Implement URL validation logic
    // This example checks if the string is a valid URL using a regular expression
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url) ? true : 'Invalid URL';
  }

