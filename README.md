# TrustCheckJS

TrustCheckJS is a lightweight JavaScript validation library that simplifies the process of validating various data types.

## Installation

Install TrustCheckJS using npm:


`npm install trustcheckjs`


`const trustcheck = require('trustcheckjs');`

### Validate email address
`console.log(trustcheck.validateEmail('test@example.com'));`

### Validate mobile number
`console.log(trustcheck.validateMobileNumber('1234567890'));`

### Validate password
`console.log(trustcheck.validatePassword('StrongPass123!'));`

### Validate URL
`console.log(trustcheck.validateURL('https://example.com'));`

### OTP generate
`console.log(trustcheck.generateOTP(6));`

### Validate image
`const fileName = "example.jpg";`
`const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];`
`console.log(trustcheck.validateFile(fileName, allowedExtensions)); `


### Sample schema and data to validate
`const schema = {
    username: { type: 'string', minLength: 3, maxLength: 30, required: true },
    email: { type: 'string', format: 'email', required: true },
    age: { type: 'number', integer: true, min: 18, max: 100, required: true },
    address: { type: 'string', required: true }
};`

`const data = {
    username: 'johnDoe123',
    email: 'john@example.com',
    age: 25,
    address: '123 Street, City',
};`

### Validate data
`const validationResult = trustcheck.validateSchema(data, schema);`
`console.log(validationResult);`

### Generate dummy data 

`const template = {
  username: 'username',
  email: 'email',
  address: 'address',
  profile: 'images'
};`

`const fakeData = trustcheck.generateFakeData(template);`
`console.log(fakeData);`
