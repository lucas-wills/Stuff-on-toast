
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ingredients').insert({ingredientId: 1, ingredients: 'eggs'}),
        knex('ingredients').insert({ingredientId: 2, ingredients: 'bacon'}),
        knex('ingredients').insert({ingredientId: 3, ingredients: 'cheese'})
      ]);
    });
};
