'use strict';

const express = require('express')
const routes = express.Router()
const mongoose = require('mongoose')
const requireDir = require('require-dir')

module.exports.users = async event => {
const app = express();

  mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true})
  requireDir('./src/models')
  app.use(express.json())
  
  routes.get('/api', require('./src/routes'))

  return event

}