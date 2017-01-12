const Knex = require('knex')
const config = require('../knexfile')[process.env.NODE_ENV || 'development']

module.exports = Knex(config)

function listAllRecipes(){
  return knex('recipes')
  .select('*')
}

function findRecipesByIngredients(ingredients){
  return knex('recipes')
  .join('ing_rec_join', 'recipes.id', '=', 'ing_rec_join.recipe_id')
  .join('ingredients', 'ingredients.id', '=', 'ing_rec_join.ingredient_id')
}
