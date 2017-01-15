const form = require('./form')

module.exports = function (ingredients) {
  return (
    `
    <form action="#" id="ingredients-form">
    <input type="button" name="add-new-recipe" value="Add New Recipe" id="add">
    <fieldset>
        <h2>Ingredients</h2>
           ${
             ingredients.map(function(ingredient){
               return (
                `<input type="checkbox" name="${ingredient.id}"
                value = "${ingredient.ingredient_name}">
                ${ingredient.ingredient_name}</br>`
               )
             })
           }
           </fieldset>
        <input type="submit" name="submit" value="submit" id="submit"/>
      </form>
  `
  )
}
