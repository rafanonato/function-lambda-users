const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/userController')

//Route Create Users
routes.get("/users", UserController.findClient)
routes.post('/users', UserController.createClient)

module.exports = {
    routes
}