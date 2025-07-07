const jwt = require('jsonwebtoken');

const value = {
    username: 'Rajkumar',
    email: 'rajkumar@example.com'
}

const token = jwt.sign(value, 'secretkey')//it keeps the value secret
console.log(token)//it gives you some value like agashgffikdsukjvbuyfguyshfhgvikhesgiuejhggug7uy
