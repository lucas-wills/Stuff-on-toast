const express = require('express')
const route = express.Router()

module.exports = function (db) {
  // GET api/v1/ingredients/
  route.get('/', get)
  route.post('/', post)
  function get (req, res, next) {
    db.listAllIngredients('ingredients')
      .then(rows => {
        res.json({data: rows})
      })
  }

  function post (req, res, next) {
    console.log('Post req: ',req);
  }

  return route
}
