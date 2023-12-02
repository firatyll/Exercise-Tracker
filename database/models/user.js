const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    count: {
        type: Number
    },
    log: [{
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        date: {
            type: Date
        }
    }]
});

const User  = mongoose.model('User', userSchema);
module.exports = User;