const User = require('../models/User');
const JWT = require('jsonwebtoken');
const createError = require('http-errors');

module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {};
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options = {
                expiresIn: '1h',
                audience: userId,
            };
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) {
                    console.log(err.message);
                    reject(createError.InternalServerError());
                    return;
                }
                resolve(token);
            });
        });
    },
    verifyAccessToken: (req, res, next) => {
        if (!req.headers['authorization'])
            return next(createError.Unauthorized());

        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];

        JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                if (err.name === 'JsonWebTokenError')
                    return next(createError.Unauthorized());
                return next(createError.Forbidden());
            }
            req.payload = payload;
            next();
        });
    },
    signRefreshToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {};
            const secret = process.env.REFRESH_TOKEN_SECRET;
            const options = {
                expiresIn: '1y',
                audience: userId,
            };
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) {
                    console.log(err.message);
                    reject(createError.InternalServerError());
                    return;
                }

                User.findById(userId, (err, user) => {
                    if (err) {
                        console.log(err.message);
                        reject(createError.InternalServerError());
                        return;
                    }

                    user.tokens = user.tokens.concat({ token });

                    user.save((err) => {
                        if (err) {
                            console.log(err.message);
                            reject(createError.InternalServerError());
                            return;
                        }
                    });

                });
                resolve(token);
            });
        });
    },
    verifyRefreshToken: (refreshToken) => {
        return new Promise((resolve, reject) => {

            JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
                if (err) return reject(createError.Unauthorized());
                const userId = payload.aud;

                User.findById(userId, (err, user) => {
                    if (err) {
                        console.log(err.message);
                        reject(createError.InternalServerError());
                        return;
                    }

                    let index = -1;
                    for (let i = 0; i < user.tokens.length; i++) {
                        if (user.tokens[i].token === refreshToken) {
                            index = i;
                            break;
                        }
                    }
                    if (index > -1) {
                        user.tokens.splice(index, 1); // removing this token 
                        user.save((err) => {
                            if (err) {
                                console.log(err.message);
                                reject(createError.InternalServerError());
                                return;
                            }
                        });
                        resolve(userId);
                    }

                    reject(createError.Unauthorized());
                });
            });
        });
    }
};