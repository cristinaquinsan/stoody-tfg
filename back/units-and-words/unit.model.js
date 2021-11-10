const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    unitname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    words: {
        type: Array,
        required: true,
    },
}, {
    timestamps: true
});

const Unit = mongoose.model('Unit', unitSchema);
module.exports = { Unit }