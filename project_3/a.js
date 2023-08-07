// Task 1: List all the food items
function listAllFoodItems(data) {
  return data.map((item) => item.foodname);
}

// Task 2: List all the food items with category "Vegetable"
function listVegetables(data) {
  return data
    .filter((item) => item.category === "Vegetable")
    .map((item) => item.foodname);
}

function listFruit(data) {
  return data
    .filter((item) =>item.category === "Fruit")
    .map((item) => item.foodname);
}


function listFruitsAndProteins(data) {
  return data
    .filter((item) =>item.category === "Protein")
    .map((item) => item.foodname);
}

function listNuts(data) {
  return data
    .filter((item) => item.category === "Nuts")
    .map((item) => item.foodname);
}

function listGrain(data) {
  return data
    .filter((item) => item.category === "Grain")
    .map((item) => item.foodname);
}

function listDairy(data) {
  return data
    .filter((item) => item.category === "Dairy")
    .map((item) => item.foodname);
}

function listFoodItemsAboveCalorie(data, calorieThreshold) {
  return data
    .filter((item) => item.calorie > calorieThreshold)
    .map((item) => item.foodname);
}

function listFoodItemBelowCalore(data, calorieThreshold) {
  return data
    .filter((item) => item.calorie < calorieThreshold)
    .map((item) => item.foodname);
}

// List all the food items sorted by protein content (highest to lowest)
function listFoodItemsByProtein(data) {
  return data
    .sort((a, b) => b.protiens - a.protiens)
    .map((item) => item.foodname);
}

//  List all the food items sorted by carbohydrate content (lowest to highest)
function listFoodItemsByCarbohydrate(data) {
  return data.sort((a, b) => a.cab - b.cab).map((item) => item.foodname);
}

// Fetch the JSON data
fetch("food_data.json")
  .then((response) => response.json())
  .then((data) => {
    const allFoodItems = listAllFoodItems(data);
    const vegetables = listVegetables(data);
    const Fruit = listFruit(data);
    const fruitsAndProteins = listFruitsAndProteins(data);
    const Nuts = listNuts(data);
    const Grain = listGrain(data);
    const Dairy = listDairy(data);
    const FoodItemsAboveCalorie = listFoodItemsAboveCalorie(data, 100);
    const FoodItemBelowCalore = listFoodItemBelowCalore(data, 100);
    const foodItemsByProtein = listFoodItemsByProtein(data);
    const foodItemsByCarbohydrate = listFoodItemsByCarbohydrate(data);

    // Display the output on the web page
    const allFoodItemsList = document.getElementById("allFoodItems");
    allFoodItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      allFoodItemsList.appendChild(li);
    });

    const vegetablesList = document.getElementById("vegetables");
    vegetables.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      vegetablesList.appendChild(li);
    });

    const FruitList = document.getElementById("Fruit");
    Fruit.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      FruitList.appendChild(li);
    });


    const fruitsAndProteinsList = document.getElementById("fruitsAndProteins");
    fruitsAndProteins.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      fruitsAndProteinsList.appendChild(li);
    });

    const NutsList = document.getElementById("nuts");
    Nuts.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      NutsList.appendChild(li);
    });

    const GrainList = document.getElementById("Grain");
    Grain.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      GrainList.appendChild(li);
    });

    const DairyList = document.getElementById("Dairy");
    Dairy.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      DairyList.appendChild(li);
    });

    const FoodItemsAboveCalorielist = document.getElementById(
      "foodItemsAboveCalorie"
    );
    FoodItemsAboveCalorie.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      FoodItemsAboveCalorielist.appendChild(li);
    });

    const FoodItemBelowCalorelist = document.getElementById(
      "FoodItemBelowCalore"
    );
    FoodItemBelowCalore.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      FoodItemBelowCalorelist.appendChild(li);
    });

    // Display the food items sorted by protein content on the web page
    const foodItemsByProteinList =
      document.getElementById("foodItemsByProtein");
    foodItemsByProtein.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      foodItemsByProteinList.appendChild(li);
    });

    const foodItemsByCarbohydrateList = document.getElementById(
      "foodItemsByCarbohydrate"
    );
    foodItemsByCarbohydrate.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      foodItemsByCarbohydrateList.appendChild(li);
    });
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });
