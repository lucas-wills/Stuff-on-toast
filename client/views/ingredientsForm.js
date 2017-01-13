module.exports = function(){
  return (
    `<form action="#" id="ingredients-form">
    <input type="button" name="add-new-recipe" value="Add New Recipe" id="add">
    <h2>Ingredients</h2>
      <input type="checkbox" name="1" value = "cheese"> Cheese<br>
      <input type="checkbox" name="2" value = "feta"> feta<br>
      <input type="checkbox" name="3" value = "orange"> orange<br>
      <input type="checkbox" name="mint" value = "mint"> mint<br>
      <input type="checkbox" name="fig" value = "fig jam"> fig jam<br>
      <input type="checkbox" name="ham" value = "ham"> ham<br>
      <input type="checkbox" name="walnuts" value = "walnuts"> walnuts<br>
      <input type="checkbox" name="butter" value = "butter"> butter<br>
      <input type="button" name="submit" value = "submit" id="submit">
    </form>`
  )
}
