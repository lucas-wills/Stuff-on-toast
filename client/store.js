const request = require('superagent')
require('superagent-as-promised')(request)
const listOfRecipes = require('./views/listOfRecipes')

module.exports = function (model) {
  const listeners = []

  return {
    subscribe: function (listener) {
      listeners.push(listener)
    },

    fetchResource: function () {
      //request
      //  .get('/api/v1/resources')
      //  .then((res) =>  {
      //    // this.update('myString',

      //  })
    },

    update: function (key, update) {
      model[key] = update
      console.log('model after update:', model)

      this.notify(model)
    },

    listOfRecipes: function(){
      this.update("view","list of Recipes")
      //function of the submitted ingredients.
      // calls the database method which filters the recipes by ingredients
      //getRecipesByIngredients
      //calls the view function with the recipes matching the ingredients
    },

    // showSpecificRecipe: function(){
    //   request
    //     .get('/api/v1/resources')
    // }

    notify: function (model) {
      listeners.forEach(function (listener) {
        listener(model)
      })
    }
  }
}
