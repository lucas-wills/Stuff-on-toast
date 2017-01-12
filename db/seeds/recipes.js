
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('recipes').insert({rowid: 1, recipes: 'poached eggs'}),
        knex('recipes').insert({rowid: 2, recipes: 'omelette'}),
        knex('recipes').insert({rowid: 3, recipes: 'bacon and eggs'})
      ]);
    });
};
