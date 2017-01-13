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
    },

    displaySpecificRecipe: function(recipeId){
      console.log(recipeId)
      this.update('view','recipe view')
      this.update('recipeId', recipeId)
    },
    ingredientsForm:function(){
      this.update('view','select ingredients')
    },
    addNewRecipeForm:function(){
      this.update('view','add new recipe form')
    },
    // addRecipe: funciton(){
    //   this.update('view', 'list of Recipes')
    // },
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
