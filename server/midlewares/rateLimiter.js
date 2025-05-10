const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 3*60*1000,
    max:5,
    message: 'Too many requests, please try again later'
});

module.exports = limiter;