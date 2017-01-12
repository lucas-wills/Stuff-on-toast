module.exports = function (knex) {

  return {
    find: function (table, options) {
      return knex(table).select()
    },

    findById: function (table, id) {
      return knex(table).select().then((rows) => rows[0])
    },

    findRecipesByIngredients: function (ingredients){
      //ingredients = [{id: 1}, {id: 3}]
      return knex('recipes')
      .join('ing_rec_join', 'recipes.id', '=', 'ing_rec_join.recipe_id')
      .join('ingredients', 'ingredients.id', '=', 'ing_rec_join.ingredient_id')
      .where('ingredient_id',ingredients[0].id)
      .then(function(data){
        const returnedData =
        {
          id: data[0].recipe_id,
          recipe_name: data[0].recipe_name,
          method: data[0].method,
          image: data[0].image
        }
        console.log(returnedData);
        return [returnedData]
      })
      // .where('')
      // .then(function(data){
      //   console.log('data is',data);
      //   return data
      // })
    }
  }
}
