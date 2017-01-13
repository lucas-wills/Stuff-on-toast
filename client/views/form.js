module.exports = function () {
  return (
    `<form action="#" id="ingredients-form">
       <fieldset>
         <input type="button" name="add-new-recipe" value="Add New Recipe" id="add">
         <h2>Ingredients</h2>
         <input type="checkbox" name="ingredient.id" value = "cheese"> Cheese<br>
       </fieldset>
       <input type="submit" name="submit" value="submit" id="submit"/>
     </form>`
  )
}
