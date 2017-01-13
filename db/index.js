module.exports = function (knex) {

  return {
    find: function (table, options) {
      return knex(table).select()
    },

    listOneRecipe: function (table, id) {
      return knex(table)
      .select()
      .then((rows) => rows[0])
    },

    findRecipesByIngredients: function (ingredients){
      //ingredients = [{id: 1}, {id: 2}]
      return knex('recipes')
      .join('ing_rec_join', 'recipes.id', '=', 'ing_rec_join.recipe_id')
      .join('ingredients', 'ingredients.id', '=', 'ing_rec_join.ingredient_id')
      .whereIn('ing_rec_join.ingredient_id', ingredients.map((ingredient) => ingredient.id))
      .then(function(multiRecipes) {
        console.log(multiRecipes);
        const returnedData =
        multiRecipes.map(function(oneRecipe){
          return {
            id: oneRecipe.recipe_id,
            recipe_name: oneRecipe.recipe_name,
            method: oneRecipe.method,
            image: oneRecipe.image
          }
        })
        return returnedData
      })
    },

     listAllIngredients: function(table) {
      return knex(table)
      .select('*')
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
