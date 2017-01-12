
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ingredients').insert({rowid: 1, ingredients: 'cheese'}),
        knex('ingredients').insert({rowid: 2, ingredients: 'eggs'}),
        knex('ingredients').insert({rowid: 3, ingredients: 'bacon'})
      ]);
    });
};
