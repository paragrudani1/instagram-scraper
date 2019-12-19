const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userInput = new Schema({
    username: {
        type: String,
        require: true
    },
    date : {
        type: Date,
        default: Date.now 
    }
})

mongoose.model('userInput', userInput)