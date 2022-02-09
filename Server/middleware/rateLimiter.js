const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hr
    max: 100, // max 100 requests
    message: 'You have exceeded the 100 requests in 1hr limit!',
    headers: true,
});

module.exports = rateLimiter;