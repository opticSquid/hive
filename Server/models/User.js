const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function (next) {
    try {

        // Here first checking if the document is new by using a helper of mongoose .isNew, since we only want to hash the password if its a new document, else  it will again hash the password.
        if (this.isNew) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
        }
        next();

    } catch (error) {
        next(error);
    }
});

UserSchema.methods.isPasswordValid = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
};

const User = mongoose.model('user', UserSchema);
module.exports = User;
