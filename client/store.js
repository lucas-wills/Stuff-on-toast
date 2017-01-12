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

    displaySpecificRecipe: function(){
      this.update('view','id-1')
    },
    ingredientsForm:function(){
      this.update('view','select ingredients')
    },
    addNewRecipeForm:function(){
      this.update('view','add new recipe form')
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
