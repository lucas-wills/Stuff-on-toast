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
      // request
      //  .get('/api/v1/resources')
      //  .then((res) =>  {
      //    // this.update('myString',

      //  })
    },

    update: function (key, update) {
      model[key] = update
      // console.log('model after update:', model)
      this.notify(model)
    },

    listOfRecipes: function () {
      this.update('view', 'list of Recipes')
    },

    displaySpecificRecipe: function (recipeId) {
      request.post(`api/v1/recipe/`)
      .send(recipeId)
      .then(function(data){
        console.log('store.js data: ',data)
        this.update('recipeId', recipeId)
      })
      this.update('view', 'recipe view')
    },

    ingredientsForm: function (model) {
      request.get('/api/v1/ingredients')
        .then(res => {
          this.update('ingredients', res.body.data)
        })
      this.update('view', 'select ingredients')
    },

    addNewRecipeForm: function () {
      this.update('view', 'add new recipe form')
    },

    notify: function (model) {
      listeners.forEach(function (listener) {
        listener(model)
      })
    }
  }
}
