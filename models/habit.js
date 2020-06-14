const mongoose = require('mongoose');


//Task Schema
const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    days: [],
    completed:{
        type: Number
    },
    streak:{
        type: Number
    }
});

const Habit = mongoose.model('Task', habitSchema);

module.exports = Habit;