const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userInput = new Schema({
    Value: {
        type: String,
        require: true
    }
})

mongoose.model('userInput', userInput)