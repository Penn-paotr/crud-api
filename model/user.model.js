const mongoose = require("mongoose");   // Mongoose: library connectant MongoDB à NodeJS

const userSchema = mongoose.Schema({         // modélisation par méthode.SChema() de Mongoose
    username: {
        type: String,
        required: [true, 'username is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    gender: {
        type: String,
        required: [false]
    },
    birthdate: {
        type: Date,
        required: [false]
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    gender: {
        type: String,
        required: [false]
    },
    country: {
        type: String,
        required: [true, 'country is required']
    },
    favorite_techno: {
        type: String,
        required: [true, 'favorite_techno is required']
    },
    job_title: {
        type: String,
        required: [true, 'job_title is required']
    },
    annual_salary: {
        type: Number,
        required: [true, 'annual_salary is required']
    },
    last_login: {
        type: Date,
        required: [false]
    },
});

// Affecter userSchema à la collection 'users' dans MongoDB
const userModel = mongoose.model('users', userSchema);

module.exports = userModel;