const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 150,
    },
    fullName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 300,
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 500,
    },
    phone: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 15,
    },
    email: {
        type: String,
        minlength: 8,
        maxlength: 200,
    },
    nameFacebook: {
        type: String,
        minlength: 8,
        maxlength: 200,
    },
    className: {
        type: String,
        minlength: 2,
        maxlength: 100,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    modifiedAt: {
        type: Date,
    },
    active: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('users', User);