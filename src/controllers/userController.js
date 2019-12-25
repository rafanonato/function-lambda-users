const mongoose = require('mongoose')

const User = mongoose.model('User')

module.exports = {

    async findClient(req, res){
        const users = await User.find()
        return res.json(users)
    },
}