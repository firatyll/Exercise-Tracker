const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    count: {
        type: Number
    },
    log: [{
        description: {
            type: String
        },
        duration: {
            type: Number
        },
        date: {
            type: Date
        }
    }]
});

const User  = mongoose.model('User', userSchema);
module.exports = User;