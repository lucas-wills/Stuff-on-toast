module.exports = function (knex) {

  return {
    find: function (table, options) {
      return knex(table).select()
    },

    findById: function (table, id) {
      return knex(table).select().then((rows) => rows[0])
    },

    findRecipesByIngredients: function (arrayOfIngredients) {
      return 'test'
    },

    addRecipe: function (arrayOfIngredientIds, recipeName, method, imgUrl) {
      return knex('recipes')
        .insert({recipe_name: recipeName, method: method, image: imgUrl})
        .then(recipeIdArray => {
          const arrayToInsert = arrayOfIngredientIds.map(ingredientId => {
            return {recipe_id: recipeIdArray[0], ingredient_id: ingredientId}
          })
          return knex.insert(arrayToInsert).into('ing_rec_join')
        })
    }

  }
}
