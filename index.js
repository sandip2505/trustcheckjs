const axios = require('axios');
import dummy from "./dummy.json" assert { type: "json" };

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

/**
 * Validate file based on allowed file extensions.
 * @param {string} fileName - The name of the file.
 * @param {Array<string>} allowedExtensions - Array of allowed file extensions (e.g., ['.jpg', '.png']).
 * @returns {boolean} - True if the file is valid, false otherwise.
 */
function validateFile(fileName, allowedExtensions) {
    // Get the file extension
    const fileExtension = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();

    // Check if the file extension is allowed
    if (allowedExtensions.includes(fileExtension)) {
        return true;
    } else {
        return "File is not valid.";
    }
}

/**
 * Validate a credit card number using the Luhn algorithm.
 * @param {string} cardNumber - The credit card number to validate.
 * @returns {string} - Message indicating if the credit card number is valid or not.
 */
function validateCreditCard(cardNumber) {
    // Remove any non-digit characters
    const cardNumberDigitsOnly = cardNumber.replace(/\D/g, '');

    // Check if the card number is empty or doesn't contain only digits
    if (!cardNumberDigitsOnly || !/^\d+$/.test(cardNumberDigitsOnly)) {
        return "Invalid card number format.";
    }

    // Apply the Luhn algorithm
    let sum = 0;
    let doubleUp = false;
    for (let i = cardNumberDigitsOnly.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumberDigitsOnly.charAt(i), 10);
        if (doubleUp) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        doubleUp = !doubleUp;
    }

    return sum % 10 === 0 ? true : "Credit card number is not valid.";
}


function validateSchema(data, schema) {
    // Validate each field in the data
    for (const key in schema) {
        const field = schema[key];
        if (field.required && !data.hasOwnProperty(key)) {
            return `${key} is required.`;
        }
        if (data.hasOwnProperty(key)) {
            if (typeof data[key] !== field.type) {
                return `${key} should be of type ${field.type}.`;
            }
            if (field.minLength && data[key].length < field.minLength) {
                return `${key} should have minimum length of ${field.minLength}.`;
            }
            if (field.maxLength && data[key].length > field.maxLength) {
                return `${key} should have maximum length of ${field.maxLength}.`;
            }
            if (field.format === 'email' && !isValidEmail(data[key])) {
                return `${key} should be a valid email address.`;
            }
            if (field.integer && !Number.isInteger(data[key])) {
                return `${key} should be an integer.`;
            }
            if (field.min && data[key] < field.min) {
                return `${key} should be greater than or equal to ${field.min}.`;
            }
            if (field.max && data[key] > field.max) {
                return `${key} should be less than or equal to ${field.max}.`;
            }
        }
    }

    return true;
}

function isValidEmail(email) {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function generateFakeData(template) {
    const fakeData = {};
  
    for (const key in template) {
      if (Object.hasOwnProperty.call(template, key)) {
        if (typeof template[key] === 'string') {
          fakeData[key] = getRandomValue(dummy[template[key]]);
        } else if (typeof template[key] === 'number') {
          fakeData[key] = getRandomNumber(template[key]);
        }
      }
    }
  
    return fakeData;
  }
  
  function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
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
    validateFile,
    validateCreditCard,
    validateSchema,
    generateFakeData,
};
