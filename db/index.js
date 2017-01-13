module.exports = function (knex) {

  return {
    find: function (table, options) {
      return knex(table).select()
    },

    findById: function (table, id) {
      return knex(table).select().then((rows) => rows[0])
    },

    findRecipesByIngredients: function (ingredients){
      //ingredients = [{id: 1}, {id: 2}]
      return knex('recipes')
      .join('ing_rec_join', 'recipes.id', '=', 'ing_rec_join.recipe_id')
      .join('ingredients', 'ingredients.id', '=', 'ing_rec_join.ingredient_id')
      .where('ingredient_id','=',ingredients[0].id)
      // .andWhere('ingredient_id','=',ingredients[1].id)
      .then(function(multiRecipes){
        const returnedData =
        multiRecipes.map(function(oneRecipe){
          return {
            id: oneRecipe.recipe_id,
            recipe_name: oneRecipe.recipe_name,
            method: oneRecipe.method,
            image: oneRecipe.image
          }
        })
        // console.log(returnedData);
        return returnedData
      })
      // .where('')
      // .then(function(data){
      //   console.log('data is',data);
      //   return data
      // })
    },

     listAllIngredients: function(table){
      return knex(table)
      .select('*')
    }

  }
}
