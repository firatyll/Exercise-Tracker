const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnection = require('./database/dbConnection');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getRoutes = require('./routes/getRoutes');
const postRoutes = require('./routes/postRoutes');

app.use(getRoutes);
app.use(postRoutes);

app.listen(process.env.PORT , async() => {
    await dbConnection();
    console.log(`Server running on port ${process.env.PORT}`);
});