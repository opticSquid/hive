var express = require('express');
const createError = require('http-errors');
const User = require('../models/User');

const { registerSchema, loginSchema } = require('../utils/validation_schema');
const { signAccessToken, verifyAccessToken, signRefreshToken, verifyRefreshToken } = require('../utils/jwt_helper');


// Using Router of express
var router = express.Router();

// Route 1 Registration Route
router.post('/register', async (req, res, next) => {
    try {
        const result = await registerSchema.validateAsync(req.body);
        const doesExit = await User.findOne({ email: result.email });
        if (doesExit)
            throw createError.Conflict(`${result.email} already exits`);

        const newUser = new User(result);
        await newUser.save();

        res.send({ success: true });

    } catch (error) {
        if (error.isJoi)
            error.status = 422; // by default it will give 500 error status which is not correct
        next(error);
    }
});

// Route 2 Login Route
router.post('/login', async (req, res, next) => {
    try {
        const result = await loginSchema.validateAsync(req.body);

        const user = await User.findOne({ email: result.email });
        if (!user) throw createError.NotFound('User not registered');

        const isMatch = await user.isPasswordValid(result.password);
        if (!isMatch) throw createError.Unauthorized('Email/password not valid');

        const accessToken = await signAccessToken(user.id);
        const refreshToken = await signRefreshToken(user.id);

        res.send({ success: true, accessToken, refreshToken });

    } catch (error) {
        if (error.isJoi)
            return next(createError.BadRequest("Invalid Username or Password"));
        next(error);
    }
});

// Route 3 Creating new refresh token
router.post('/refreshToken', async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) throw createError.BadRequest();

        const userId = await verifyRefreshToken(refreshToken);
        const accessToken = await signAccessToken(userId);
        const refToken = await signRefreshToken(userId);

        res.send({ success: true, accessToken, refreshToken: refToken });

    } catch (error) {
        next(error);
    }
});

// Route 4 Deleting refresh token
router.put('/logout', async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) throw createError.BadRequest();

        await verifyRefreshToken(refreshToken); // verifying will delete this token
        res.sendStatus(204);

    } catch (error) {
        next(error);
    }
});

// ROUTE 5: Get user using logged in details
router.get("/getuser", verifyAccessToken, async (req, res, next) => {
    try {
        const userId = req.payload.aud;
        const user = await User.findById(userId).select("-password -tokens -__v");
        res.send(user);

    } catch (error) {
        console.error(error.message);
        next(error);
    }
});

module.exports = router;
