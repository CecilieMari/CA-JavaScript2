const url = "https://api.noroff.dev/api/v1/social";

 async function getBooks(url) {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results)
    return results
}

//const add = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

//async function get(url) {
  //  const response = await fetch(url);
   // const products = await response.json();
    //console.log(products);  // denne bruker vi or å kjekke i consolen at alt virker som det skal//
    //let recipe = document.querySelector(".theDrinks");    //denne må også være påå plass for å få det inn i html
    
   // if(products){ 
      //  for( i = 0; i < products.products.length; i++){
    
    //recipe.innerHTML += `<h2> ${products.products[i].name} </h2>`;
       // <p> ${drinks.drinks[i].strInstructions} </p>
        //<li> ${drinks.drinks[i].strIngredient2} </li>
        //<li> ${drinks.drinks[i].strIngredient3} </li>
        //<li> ${drinks.drinks[i].strIngredient4} </li>
        //<img width="400" height="400" src=${drinks.drinks[i].strDrinkThumb} > </img> `;
  //      }}

//hvordan få det inn i html//
  //  return products
//}  