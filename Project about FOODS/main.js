let allMeals = [];

async function fetchMeals() {
  try {
    const response = await fetch("meals.json");
    const data = await response.json();
    allMeals = data.meals;
    displayMeals(allMeals);
  } catch (error) {
    console.error(error);
  }
}

function displayMeals(meals) {
  const container = document.getElementById("foods-container");
  container.innerHTML = "";

  meals.forEach((meal) => {
    const mealCard = `
      <div class="food-item">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <h3>${meal.strMeal}</h3>
        <p class="category">${meal.strCategory} | ${meal.strArea}</p>
        <p class="tags">${meal.strTags}</p>
        <div class="kcall">
            <p class="time">Time: ${meal.strTime}</p>
            <p class="calories">Calories: ${meal.strCalories}</p>
        </div>
        <button onclick="showRecipe('${meal.idMeal}')">Reciept</button>
        <p id="recipe-${meal.idMeal}" style="display: none;">${meal.strInstructions}</p>
      </div>
    `;
    container.innerHTML += mealCard;
  });

  document.getElementById("no-results").style.display = meals.length
    ? "none"
    : "block";
}

function showRecipe(id) {
  const recipeElement = document.getElementById(`recipe-${id}`);
  recipeElement.style.display =
    recipeElement.style.display === "none" ? "block" : "none";
}

function filterMeals() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const filteredMeals = allMeals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchInput)
  );
  displayMeals(filteredMeals);
}

fetchMeals();
