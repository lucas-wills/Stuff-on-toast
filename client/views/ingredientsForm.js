module.exports = function(){
  return (
    `<form action="#">
    <h2>Ingredients</h2>
      <input type="checkbox" name="ingredientID" value = "cheese"> Cheese<br>
      <input type="checkbox" name="ingredientID" value = "feta"> feta<br>
      <input type="checkbox" name="ingredientID" value = "orange"> orange<br>
      <input type="checkbox" name="ingredientID" value = "mint"> mint<br>
      <input type="checkbox" name="ingredientID" value = "fig jam"> fig jam<br>
      <input type="checkbox" name="ingredientID" value = "ham"> ham<br>
      <input type="checkbox" name="ingredientID" value = "walnuts"> walnuts<br>
      <input type="checkbox" name="ingredientID" value = "butter"> butter<br>
      <input type="button" name="submit" value = "submit" id="submit">
    </form>`
  )
}
