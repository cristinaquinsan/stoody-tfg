const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    passwd: {
        type: String,
        required: true,
        trim: true
    },
    motherlang: {
        type: String,
        required: true,
        trim: true
    },
    studlangs: {
        type: Array,
        required: true
    },
}, {
    timestamps: true
});

module.exports = userSchema;