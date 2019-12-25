const mongoose = require(mongoose)

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    age:{
        type: String,
        require: true
    },

    adress:{
        type: String,
        require: true
    },

    createdAt:{
        type: Date,
        default: Date.now
    }
})

mongoose.model('User', userSchema)