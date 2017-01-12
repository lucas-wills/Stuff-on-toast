const test = require('ava')
const seedCats = require('../../db/seed-cats')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)

//migrate the latest cats database table
test.beforeEach(() => {
  console.log('migrating....')
  return testKnex.migrate.latest()
    .then(() => {
      console.log('seeds....')
      return testKnex.seed.run()
    })
})

//rollback to the original state of the database
test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})

test('findRecipesByIngredients | returns all recipes from db which include no more than the submitted ingredients', (t) => {
  t.plan(1)

  //Arrange
  const ingredients = ['cheese', 'eggs'] //OR {cheese: true, eggs: true, bacon: false}
  const expected = [] //array of all recipes which have no ingredients not in ingredients

  //Act
  const actual = findRecipesByIngredients(ingredients)

  //Assert
  t.deepEqual(expected, actual, 'returns all and only the recipes which can be made with selected ingredients')
})
