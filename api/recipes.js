const express = require('express')
const route = express.Router()

module.exports = function (db) {

  // GET api/v1/cats/
  route.get('/', get)
  route.post('/', post)
  // console.log('Hello');
  function get (req, res, next) {
    const ingredients = req.query.ingredients
    console.log(req.query);

    res.json({key: 'value'})
    // db.findRecipesByIngredients(ingredients)
    // db.get()
  }

  function post (req, res, next) {
  }

  return route
}
