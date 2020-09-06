require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }).then(() => {
        console.log('Database connected.');
    }).catch(err => {
        console.log('Connection failed.');
    });

    // const connection = mongoose.connection;

    // connection.once('open', () => {
    //     console.log('Database connected.');
    // }).catch(err => {
    //     console.log('Connection failed.');
    // });
}

module.exports = connectDB;