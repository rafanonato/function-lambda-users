'use strict';

const express = require('express')
const routes = express.Router()
const mongoose = require('mongoose')

module.exports.users = async event => {

  mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true})

  routes.get('/api', require('./src/routes'))

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }
    )}
}