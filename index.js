const axios = require('axios');

// Exported functions for validation

/**
 * Validate if multiple fields are not empty.
 * @param {...string} fields - The fields to validate.
 * @returns {(boolean|string)} - True if all fields are not empty, an error message otherwise.
 */

function validateNotEmpty(value, fieldName) {
    const emptyFields = fields.filter(field => !field || field.trim() === '');

    if (emptyFields.length === 0) {
        return true;
    } else {
        const emptyFieldNames = emptyFields.map((_, index) => `Field ${index + 1}`).join(', ');
        return `${emptyFieldNames} cannot be empty`;
    }
}

/**
 * Validate if a string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {(boolean|string)} - True if the email is valid, an error message otherwise.
 */

function validateEmail(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email) ? true : `${email} This email is Invalid`;
}


/**
 * Validate if a string contains only alphanumeric characters.
 * @param {string} input - The string to validate.
 * @returns {(boolean|string)} - True if the string is alphanumeric, an error message otherwise.
 */
function validateAlphanumeric(input) {
    // Implement alphanumeric validation logic
    // This example uses a regular expression to check if the string contains only letters and numbers
    return /^[a-zA-Z0-9]+$/.test(input) ? true : 'Only alphanumeric characters are allowed';
}

/**
 * Validate if a string is a valid mobile number.
 * @param {string} mobileNumber - The mobile number to validate.
 * @returns {(boolean|string)} - True if the mobile number is valid, an error message otherwise.
 */
function validateMobileNumber(mobileNumber) {
    // Regular expression for a simple mobile number validation
    const mobileNumberRegex = /^[6-9]\d{9}$/;

    return mobileNumberRegex.test(mobileNumber) ? true : `${mobileNumber} This mobile number is Invalid`;
}


/**
* Validate if a string is a strong password.
* @param {string} password - The password to validate.
* @returns {(boolean|string)} - True if the password is strong, an error message otherwise.
*/
function validatePassword(password) {
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
async function validateURL(url) {
    try {
        const validate = await axios.get(url)
        return true;
    } catch (error) {
        return "Invalid URL";
    }
}

/**
* Generate a random One-Time Password (OTP).
* @param {number} length - The length of the OTP.
* @returns {string} - The generated OTP.
*/
function generateOTP(length) {
    const characters = '0123456789';
    let otp = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters.charAt(randomIndex);
    }

    return otp;
}


// Export the functions
module.exports = {
    validateNotEmpty,
    validateEmail,
    validateAlphanumeric,
    validateMobileNumber,
    validatePassword,
    validateURL,
    generateOTP,
};
