const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    rollNo: {
        type: Number,
        required: true,
        unique: true
    },
    branch: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema)