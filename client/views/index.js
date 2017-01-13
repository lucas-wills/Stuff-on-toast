const _ = require('lodash')
const form = require('./form')
const ingredientsForm = require('./ingredientsForm')
const listOfRecipes = require ('./listOfRecipes')
const displaySpecificRecipe = require('./displaySpecificRecipe')
const addNewRecipeForm = require('./addNewRecipeForm')


module.exports = function (model) {

  function switchStates(view){

    switch (view) {
      case 'select ingredients':
        return ingredientsForm()
      case 'list of Recipes':
        return listOfRecipes()
      case 'recipe view':
        return displaySpecificRecipe(view)
      case 'add new recipe form':
        return addNewRecipeForm()


      break;
      default:

    }
    // if(view === "select ingredients"){
    //   return ingredientsForm()
    // } else if(view === "list of Recipes"){
    //   return listOfRecipes()
    // }
  }
const content = switchStates(model.view);

  return (
    `<div id="app">
    <h1>${model.appName}</h1>
      ${content}

    </div>`
  )
}
