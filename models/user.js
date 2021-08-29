const mongoose = require('mongoose')

// CREATED SCHEMA/MODEL TO INTERACT WITH THE DB IN EASY WAY/USING THE FOLLOWING
const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//model-database, schema-name
module.exports = mongoose.model('User', userSchema)
