const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnection;