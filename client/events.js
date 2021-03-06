const getFormData = require('get-form-data')
const classList = require('classlist')
module.exports = function (store) {

  // when a click on #submit is recieved
  // call a method on store


  document.addEventListener('click', (e) => {
    console.log('clicked', e.target)
    const list = classList(e.target)
      switch (e.target.id) {
      case 'submit':
        e.preventDefault()
        const ingredientsData =  getFormData(document.querySelector('#ingredients-form'))
        const ingredientIds = Object.keys(ingredientsData).map(ingredientData => {
          return Number(ingredientData)
        })
        console.log("data",ingredientIds)

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
        //store.displaySpecificRecipe('id-1')
        //post form data to a route
        //display the recipe profile page
        //when the post responds update the model that shows
    }


    if (list.contains('listed-recipe')) {

      console.log('you got the first recipe')
      store.displaySpecificRecipe(e.target.id)


    }



  })
}
