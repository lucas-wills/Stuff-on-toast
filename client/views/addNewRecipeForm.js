module.exports = function(){
  return (
    `<form action="#">
    <h2>New Recipe</h2>
    <input type="text" name="recipeName" placeholder= "write name here">
    <h3>Ingredients</h3>
      <input type="checkbox" name="ingredientID" value = "cheese"> Cheese<br>
      <input type="checkbox" name="ingredientID" value = "feta"> feta<br>
      <input type="checkbox" name="ingredientID" value = "orange"> orange<br>
      <input type="checkbox" name="ingredientID" value = "mint"> mint<br>
      <input type="checkbox" name="ingredientID" value = "fig jam"> fig jam<br>
      <input type="checkbox" name="ingredientID" value = "ham"> ham<br>
      <input type="checkbox" name="ingredientID" value = "walnuts"> walnuts<br>
      <input type="checkbox" name="ingredientID" value = "butter"> butter<br>

    <h3>Instructions</h3>
    <input type="text" name="instructions" placeholder="write instructions here">

     <h3>Hints/Tips</h3>
     <input type="text" name="hints" placeholder="write hints/tips here">

     <h3>Image</h3>
     <input type="text" name="URL" placeholer="www.url"><br>
     <input type="button" name="add" value = "Make Recipe" id="make">
    </form>`
  )
}
