const express = require('express')
const route = express.Router()

module.exports = function (db) {
  // GET api/v1/cats/
  route.get('/', get)
  route.post('/', post)
  // console.log('Hello');
  function get (req, res, next) {
    db.listAllIngredients('ingredients')
      .then(rows => {
        res.json({data: rows})
      })
  }

  function post (req, res, next) {
  }

  return route
}
