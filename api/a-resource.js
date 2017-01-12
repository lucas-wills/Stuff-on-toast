const express = require('express')
const route = express.Router()

module.exports = function (db) {
 
  // GET api/v1/cats/
  route.get('/', get)
  route.post('/', post)

  function get (req, res, next) {
    // db.get()
  }
  
  function post (req, res, next) {
  }

  return route
}


