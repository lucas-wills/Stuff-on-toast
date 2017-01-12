
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ing_rec_join').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ing_rec_join').insert({
          id: 1,
          recipe_id: 1,
          ingredient_id: 1
        }),
        knex('ing_rec_join').insert({
          id: 2,
          recipe_id: 2,
          ingredient_id: 1
        }),
        knex('ing_rec_join').insert({
          id: 3,
          recipe_id: 2,
          ingredient_id: 3
        }),
        knex('ing_rec_join').insert({
          id: 4,
          recipe_id: 3,
          ingredient_id: 1
        }),
        knex('ing_rec_join').insert({
          id: 5,
          recipe_id: 3,
          ingredient_id: 2
        })
      ]);
    });
};
