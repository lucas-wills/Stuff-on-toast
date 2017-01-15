const getFormData = require('get-form-data')
const classList = require('class-list')
module.exports = function (store) {
  // when a click on #submit is recieved
  // call a method on store

  document.addEventListener('click', (e) => {
    console.log('clicked', e.target)
    const list = classList(e.target)
    switch (e.target.id) {
      case 'submit':
        e.preventDefault()
        const form = document.querySelector('#ingredients-form')
        const ingredientsData = getFormData(form)
        console.log('ingredientsData from events.js: ',ingredientsData)
        const ingredientIds = Object.keys(ingredientsData).map(ingredientData => {
          return Number(ingredientData)
        })
        // console.log('ingredientsIds from events.js', ingredientIds)

        store.listOfRecipes()
        break

      case 'recipe view':
        console.log('you got the first recipe')
        store.displaySpecificRecipe(e.target.id)
        break
      case 'home':
        store.ingredientsForm()
        break
      case 'add':
        store.addNewRecipeForm()
        break
      case 'make':
        const formData = getFormData(document.querySelector('#make-new-form'))
        // store.displaySpecificRecipe('id-1')
        // post form data to a route
        // display the recipe profile page
        // when the post responds update the model that shows
    }

    if (list.contains('listed-recipe')) {
      console.log('you got the first recipe')
      store.displaySpecificRecipe(e.target.id)
    }
  })
}
