const _ = require('lodash')
const form = require('./form')
const ingredientsForm = require('./ingredientsForm')
const listOfRecipes = require ('./listOfRecipes')
const displaySpecificRecipe = require('./displaySpecificRecipe')



module.exports = function (model) {

  function switchStates(view){
    if(view === "select ingredients"){
      return ingredientsForm()
    } else if(view === "list of Recipes"){
      return listOfRecipes()
    }
  }
const content = switchStates(model.view);

  return (
    `<div id="app">
    <h1>${model.appName}</h1>
      ${content}

    </div>`
  )
}
