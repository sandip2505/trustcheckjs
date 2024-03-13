# TrustCheckJS

TrustCheckJS is a lightweight JavaScript validation library that simplifies the process of validating various data types.

## Installation

Install TrustCheckJS using npm:

```bash
npm install trustcheckjs


const trustcheck = require('trustcheckjs');

// Validate email address
console.log(trustcheck.validateEmail('test@example.com'));

// Validate mobile number
console.log(trustcheck.validateMobileNumber('1234567890'));

// Validate password
console.log(trustcheck.validatePassword('StrongPass123!'));

// Validate URL
console.log(trustcheck.validateURL('https://example.com'));

// OTP generate
console.log(trustcheck.generateOTP(6));
