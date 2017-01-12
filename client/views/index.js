const _ = require('lodash')
const form = require('./form')
const ingredientsForm = require('./ingredientsForm')
const listOfRecipes = require ('./listOfRecipes')
const displaySpecificRecipe = require('./displaySpecificRecipe')

module.exports = function (model) {

  return (
    `<div id="app">
    <h1>${model.appName}</h1>
      ${form()}
      ${ingredientsForm()}
      ${listOfRecipes()}
      ${displaySpecificRecipe()}


    </div>`
  )
}
