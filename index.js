const API_KEY = "6478ebb33eb2489b8b532d4e7f41af00";
const recipeListEl = document.getElementById("list");

function viewRecipes(recipes){
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeBookEl = document.createElement("li");
        recipeBookEl.classList.add("book");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerHTML = recipe.title;

        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map
            ((ingredient) =>
             ingredient.original).join(", ")}`;
        recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "See Recipe";

        
        
        recipeBookEl.appendChild(recipeImageEl);
        recipeBookEl.appendChild(recipeTitleEl);
        recipeBookEl.appendChild(recipeIngredientsEl);
        recipeBookEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeBookEl);
    });
}

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${API_KEY}`)

    const data = await response.json()

    return data.recipes
}



async function init(){
    const recipes = await getRecipes();
    // console.log(recipes);
    viewRecipes(recipes)
}
init()