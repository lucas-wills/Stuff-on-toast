const test = require('ava')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)
// const db = require('../../db') //Don't forget to add the correct path here

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

test('findRecipesByIngredients | returns the bacon recipes ', (t) => {
  t.plan(1)

  //Arrange
  const ingredients = [{id: 2}] //OR {cheese: true, eggs: true, bacon: false}
  const expected = [
    {
      id: 3,
      recipe_name: 'bacon and eggs',
      method: 'Cook bacon. Poach eggs. Add toast',
      image: 'http://www.eggcrackin.com/wp-content/uploads/2015/12/047a9eff.product_classic.png'
    }
  ]

  //Act
  return db.findRecipesByIngredients(ingredients)
  .then(function(data){

    //Assert
    t.deepEqual(data,expected)
  })
})

test('findRecipesByIngredients | returns the egg recipes ', (t) => {
  t.plan(1)

  //Arrange
  const ingredients = [{id: 1}] //OR {cheese: true, eggs: true, bacon: false}
  const expected = [
    {
      id: 1,
      recipe_name: 'poached egg',
      method: 'Add a little vinegar to water just coming to the boil. Turn off the heat and gently break eggs into the water. Leave for 3 mins. Drain eggs well before putting onto toast',
      image: 'http://www.jamieshomecookingskills.com/core_jo/images/jhcs/main-image-2556.jpg'
    },
    {
      id: 2,
      recipe_name: 'omelette',
      method: 'Break two eggs into a bowl and whisk well with a little grated cheese. Melt butter in a pan and cook on a low heat, constantly stirring until just cooked.',
      image: 'http://www.bite.co.nz/images/recipes/exam_eggs_bite.jpg'
    },
    {
      id: 3,
      recipe_name: 'bacon and eggs',
      method: 'Cook bacon. Poach eggs. Add toast',
      image: 'http://www.eggcrackin.com/wp-content/uploads/2015/12/047a9eff.product_classic.png'
    }
  ]

  //Act
  return db.findRecipesByIngredients(ingredients)
  .then(function(data){

    //Assert
    t.deepEqual(data,expected)
  })
})

// test('findRecipesByIngredients | returns the egg and bacon recipes ', (t) => {
//   t.plan(1)
//
//   //Arrange
//   const ingredients = [{id: 1},{id:2}] //OR {cheese: true, eggs: true, bacon: false}
//   const expected = [
//     {
//       id: 3,
//       recipe_name: 'bacon and eggs',
//       method: 'Cook bacon. Poach eggs. Add toast',
//       image: 'http://www.eggcrackin.com/wp-content/uploads/2015/12/047a9eff.product_classic.png'
//     }
//   ]
//
//   //Act
//   return db.findRecipesByIngredients(ingredients)
//   .then(function(data){
//
//     //Assert
//     t.deepEqual(data,expected)
//   })
// })

test('listAllIngredients | returns a list of all ingredients', (t) => {
  t.plan(1)

  //Arrange
  const input = "ingredients" //OR {cheese: true, eggs: true, bacon: false}
  const expected = [
  {id: 1, ingredient_name: 'eggs'},
  {id: 2, ingredient_name: 'bacon'},
  {id: 3, ingredient_name: 'cheese'}
  ]

  //Act
  return db.listAllIngredients(input)
  .then(function(data){
    console.log(data);
    //Assert
    t.deepEqual(data,expected)
  })
})
