const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
    front: {
        type: String,
        required: true,
        trim: true
    },
    back: {
        type: String,
        required: true,
        trim: true
    },
    hint:{
        type: String,
        trim: true
    },
    feedback: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});

const Word = mongoose.model('Word', wordSchema);
module.exports = { Word }