const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: [
      { item: "Spaghetti", quantity: "200", unit: "g" },
      { item: "Eggs", quantity: "2", unit: "" },
      { item: "Parmesan", quantity: "50", unit: "g", notes: "grated" },
      { item: "Pancetta", quantity: "100", unit: "g", notes: "diced" },
      { item: "Black Pepper", quantity: "1", unit: "tsp", notes: "freshly ground" }
    ],
     preparation: [
      "Boil spaghetti until al dente.",
      "Fry pancetta until crisp.",
      "Whisk eggs with Parmesan and pepper.",
      "Toss hot pasta with pancetta and egg mixture.",
      "Serve immediately."
    ],
    author: "Luca Rossi",
    cuisine: "Italian",
    story: "Learned from a Roman trattoria cook who swore by no cream and extra pepper.",
    url: "https://cdn.pixabay.com/photo/2015/04/08/13/13/pasta-712664_1280.jpg",
    filters: ["Main Dish"]
  },
  {
    id: 2,
    title: "Chicken Coconut Curry",
     ingredients: [
      { item: "Chicken", quantity: "500", unit: "g", notes: "cubed" },
      { item: "Onion", quantity: "1", unit: "", notes: "chopped" },
      { item: "Garlic", quantity: "2", unit: "cloves", notes: "minced" },
      { item: "Curry Powder", quantity: "2", unit: "tbsp" },
      { item: "Coconut Milk", quantity: "400", unit: "ml" }
    ],
    preparation: [
      "Sauté onion and garlic in oil.",
      "Add curry powder and bloom spices.",
      "Stir in chicken pieces and cook until browned.",
      "Pour in coconut milk and simmer until chicken is tender.",
      "Serve with rice."
    ],
    author: "Anita Patel",
    cuisine: "Indian",
    story: "My weeknight shortcut: bloom spices in oil, then add coconut milk.",
    url: "https://cdn.pixabay.com/photo/2021/07/04/13/23/green-curry-6386360_1280.jpg",
    filters: ["Main Dish"]
  },
  {
    id: 3,
    title: "Vegetable Stir-Fry",
    ingredients: [
      { item: "Broccoli", quantity: "150", unit: "g", notes: "florets" },
      { item: "Carrots", quantity: "2", unit: "", notes: "sliced" },
      { item: "Bell Pepper", quantity: "1", unit: "", notes: "sliced" },
      { item: "Soy Sauce", quantity: "2", unit: "tbsp" },
      { item: "Ginger", quantity: "1", unit: "tsp", notes: "grated" }
    ],
     preparation: [
      "Heat oil in a wok.",
      "Add ginger and garlic.",
      "Toss in chopped vegetables.",
      "Stir-fry with soy sauce until crisp-tender.",
      "Serve hot."
    ],
    author: "Mei Lin",
    cuisine: "Chinese",
    story: "This is my fridge-cleanout hero—colorful veggies and a quick sauce.",
    url: "https://cdn.pixabay.com/photo/2018/03/18/20/06/vegetables-3238149_1280.jpg",
    filters: ["Main Dish", "Quick", "Vegan"]
  },
  {
    id: 4,
    title: "Beef Tacos",
    ingredients: [
      { item: "Tortillas", quantity: "6", unit: "" },
      { item: "Ground Beef", quantity: "300", unit: "g" },
      { item: "Lettuce", quantity: "50", unit: "g", notes: "shredded" },
      { item: "Cheddar", quantity: "50", unit: "g", notes: "grated" },
      { item: "Salsa", quantity: "100", unit: "ml" }
    ],
     preparation: [
      "Cook ground beef with spices.",
      "Warm tortillas.",
      "Fill with beef, lettuce, cheese, and salsa.",
      "Fold and serve."
    ],
    author: "Diego Martínez",
    cuisine: "Mexican",
    story: "Inspired by street tacos but tailored for home.",
    url: "https://cdn.pixabay.com/photo/2020/03/17/21/52/tacos-4942004_1280.jpg",
    filters: ["Main Dish", "Quick"]
  },
  {
    id: 5,
    title: "Margherita Pizza",
    ingredients: [
    { item: "Pizza Dough", quantity: "1", unit: "base" },
    { item: "Tomato Sauce", quantity: "150", unit: "ml" },
    { item: "Mozzarella", quantity: "125", unit: "g", notes: "fresh" },
    { item: "Basil", quantity: "6", unit: "leaves" }
  ],
    preparation: [
      "Roll out pizza dough.",
      "Spread tomato sauce.",
      "Top with mozzarella and basil.",
      "Bake until crust is golden and cheese melts.",
      "Slice and serve."
    ],
    author: "Sara Romano",
    cuisine: "Italian",
    story: "My nonna insisted the sauce stay simple.",
    url: "https://cdn.pixabay.com/photo/2017/07/22/22/57/pizza-2530169_1280.jpg",
    filters: ["Main Dish"]
  },
  {
    id: 6,
    title: "Caesar Salad",
    ingredients: [
    { item: "Romaine", quantity: "200", unit: "g", notes: "chopped" },
    { item: "Croutons", quantity: "50", unit: "g" },
    { item: "Parmesan", quantity: "30", unit: "g", notes: "shaved" },
    { item: "Caesar Dressing", quantity: "3", unit: "tbsp" }
  ],
    preparation: [
      "Chop romaine lettuce.",
      "Toss with Caesar dressing.",
      "Add croutons and Parmesan.",
      "Serve chilled."
    ],
    author: "Marcello De Luca",
    cuisine: "Italian-American",
    story: "The anchovy is non-negotiable for authentic flavor.",
    url: "https://cdn.pixabay.com/photo/2020/06/17/10/20/salad-5308953_1280.jpg",
    filters: ["Appetizer"]
  },
  {
    id: 7,
    title: "Pancakes",
    ingredients: [
    { item: "Flour", quantity: "200", unit: "g" },
    { item: "Milk", quantity: "250", unit: "ml" },
    { item: "Eggs", quantity: "2", unit: "" },
    { item: "Sugar", quantity: "2", unit: "tbsp" },
    { item: "Baking Powder", quantity: "1", unit: "tsp" }
  ],
    preparation: [
      "Mix flour, sugar, baking powder, milk, and eggs.",
      "Heat a pan and pour batter.",
      "Flip when bubbles form.",
      "Stack and serve with syrup."
    ],
    author: "Emily Johnson",
    cuisine: "American",
    story: "My Sunday ritual—stacked high with butter and maple syrup.",
    url: "https://cdn.pixabay.com/photo/2025/05/28/09/14/pancakes-9626862_1280.jpg",
    filters: ["Dessert"]
  },
  {
    id: 8,
    title: "Grilled Salmon",
     ingredients: [
    { item: "Salmon", quantity: "2", unit: "fillets" },
    { item: "Lemon", quantity: "1", unit: "", notes: "sliced" },
    { item: "Olive Oil", quantity: "2", unit: "tbsp" },
    { item: "Garlic", quantity: "2", unit: "cloves", notes: "minced" },
    { item: "Parsley", quantity: "2", unit: "tbsp", notes: "chopped" }
  ],
    preparation: [
      "Brush salmon with oil, garlic, and lemon.",
      "Grill skin-side down until cooked through.",
      "Garnish with parsley.",
      "Serve warm."
    ],
    author: "Natalie Brooks",
    cuisine: "Mediterranean",
    story: "Best enjoyed outdoors with smoky char marks.",
    url: "https://cdn.pixabay.com/photo/2018/11/16/18/00/salmon-3819966_1280.jpg",
    filters: ["Main Dish", "Gluten-Free"]
  },
  {
    id: 9,
    title: "Lasagna",
    ingredients: [
    { item: "Lasagna Sheets", quantity: "8", unit: "" },
    { item: "Ground Beef", quantity: "400", unit: "g" },
    { item: "Tomato Sauce", quantity: "300", unit: "ml" },
    { item: "Ricotta", quantity: "200", unit: "g" },
    { item: "Mozzarella", quantity: "150", unit: "g" }
  ],
    preparation: [
      "Cook beef with tomato sauce.",
      "Layer lasagna sheets, meat sauce, ricotta, and mozzarella.",
      "Repeat layers.",
      "Bake until bubbly.",
      "Rest before slicing."
    ],
    author: "Giovanni Bianchi",
    cuisine: "Italian",
    story: "A family favorite layered with love.",
    url: "https://cdn.pixabay.com/photo/2021/02/06/11/51/food-5987888_1280.jpg",
    filters: ["Main Dish"]
  },
  {
    id: 10,
    title: "Tomato Soup",
   ingredients: [
    { item: "Tomatoes", quantity: "500", unit: "g" },
    { item: "Onion", quantity: "1", unit: "", notes: "chopped" },
    { item: "Garlic", quantity: "2", unit: "cloves", notes: "minced" },
    { item: "Vegetable Stock", quantity: "500", unit: "ml" },
    { item: "Cream", quantity: "100", unit: "ml" }
  ],
    preparation: [
      "Sauté onion and garlic.",
      "Add chopped tomatoes.",
      "Pour in vegetable stock.",
      "Simmer and blend until smooth.",
      "Stir in cream and serve."
    ],
    author: "Grace Thompson",
    cuisine: "American",
    story: "Comfort food for rainy days.",
    url: "https://cdn.pixabay.com/photo/2021/11/11/09/25/tomato-soup-6785776_1280.jpg",
    filters: ["Appetizer", "Vegan"]
  },
  {
    id: 11,
    title: "Fried Rice",
     ingredients: [
    { item: "Rice", quantity: "250", unit: "g", notes: "cooked, preferably day-old" },
    { item: "Eggs", quantity: "2", unit: "" },
    { item: "Carrots", quantity: "1", unit: "", notes: "diced" },
    { item: "Peas", quantity: "50", unit: "g" },
    { item: "Soy Sauce", quantity: "2", unit: "tbsp" }
  ],
    preparation: [
      "Scramble eggs in a wok.",
      "Add vegetables and stir-fry.",
      "Toss in rice and soy sauce.",
      "Mix well and serve hot."
    ],
    author: "Kenji Tanaka",
    cuisine: "Chinese",
    story: "Best made with leftover rice for perfect texture.",
    url: "",
    filters: ["Main Dish", "Quick"]
  },
  {
    id: 12,
    title: "BBQ Ribs",
    ingredients: [
    { item: "Pork Ribs", quantity: "1", unit: "kg" },
    { item: "BBQ Sauce", quantity: "200", unit: "ml" },
    { item: "Garlic", quantity: "3", unit: "cloves", notes: "minced" },
    { item: "Paprika", quantity: "1", unit: "tbsp" }
  ],
    preparation: [
      "Rub ribs with spices.",
      "Bake or slow-cook until tender.",
      "Brush with BBQ sauce.",
      "Grill briefly for char.",
      "Rest and slice."
    ],
    author: "James Carter",
    cuisine: "American",
    story: "Finger-licking good from summer cookouts.",
    url: "https://cdn.pixabay.com/photo/2022/08/25/17/41/spare-ribs-7410911_1280.jpg",
    filters: ["Main Dish"]
  },
  {
    id: 13,
    title: "Greek Salad",
    ingredients: [
    { item: "Cucumber", quantity: "1", unit: "", notes: "sliced" },
    { item: "Tomatoes", quantity: "2", unit: "", notes: "chopped" },
    { item: "Feta", quantity: "100", unit: "g", notes: "cubed" },
    { item: "Olives", quantity: "50", unit: "g" },
    { item: "Onion", quantity: "1/2", unit: "", notes: "sliced" }
  ],
    preparation: [
      "Chop cucumber, tomato, and onion.",
      "Add feta and olives.",
      "Toss with olive oil.",
      "Season and serve fresh."
    ],
    author: "Eleni Papadopoulos",
    cuisine: "Greek",
    story: "A refreshing staple of Mediterranean summers.",
    url: "https://cdn.pixabay.com/photo/2021/01/10/04/37/salad-5904093_1280.jpg",
    filters: ["Appetizer", "Gluten-Free", "Vegan"]
  },
  {
    id: 14,
    title: "Chocolate Cake",
    ingredients: [
    { item: "Flour", quantity: "200", unit: "g" },
    { item: "Cocoa Powder", quantity: "50", unit: "g" },
    { item: "Sugar", quantity: "150", unit: "g" },
    { item: "Eggs", quantity: "3", unit: "" },
    { item: "Butter", quantity: "100", unit: "g", notes: "softened" }
  ],
    preparation: [
      "Mix flour, cocoa, sugar, eggs, and butter.",
      "Pour batter into a pan.",
      "Bake until set.",
      "Cool and frost if desired.",
      "Slice and serve."
    ],
    author: "Sophia Brown",
    cuisine: "American",
    story: "My go-to birthday cake recipe.",
    url: "https://cdn.pixabay.com/photo/2017/06/03/23/52/cake-2370002_1280.jpg",
    filters: ["Dessert"]
  },
  {
    id: 15,
    title: "Shrimp Scampi",
    ingredients: [
    { item: "Shrimp", quantity: "300", unit: "g", notes: "peeled" },
    { item: "Garlic", quantity: "3", unit: "cloves", notes: "minced" },
    { item: "Butter", quantity: "50", unit: "g" },
    { item: "Lemon", quantity: "1", unit: "", notes: "juiced" },
    { item: "Parsley", quantity: "2", unit: "tbsp", notes: "chopped" }
  ],
     preparation: [
      "Sauté garlic in butter.",
      "Add shrimp and cook until pink.",
      "Squeeze lemon juice.",
      "Garnish with parsley.",
      "Serve over pasta or bread."
    ],
    author: "Natalie Brooks",
    cuisine: "American",
    story: "Perfect over pasta or with crusty bread.",
    url: "https://cdn.pixabay.com/photo/2021/12/31/21/39/seafood-6906632_1280.jpg",
    filters: ["Main Dish", "Gluten-Free"]
  },
  {
    id: 16,
    title: "Stuffed Peppers",
    ingredients: [
    { item: "Bell Peppers", quantity: "4", unit: "" },
    { item: "Rice", quantity: "200", unit: "g", notes: "cooked" },
    { item: "Ground Beef", quantity: "300", unit: "g" },
    { item: "Tomato Sauce", quantity: "150", unit: "ml" }
  ],
    preparation: [
      "Cook rice and beef with tomato sauce.",
      "Stuff mixture into bell peppers.",
      "Bake until peppers are tender.",
      "Serve warm."
    ],
    author: "Maria Lopez",
    cuisine: "Spanish",
    story: "A colorful dish that feels like home.",
    url: "https://cdn.pixabay.com/photo/2017/01/14/00/26/peppers-1978562_1280.jpg",
    filters: ["Main Dish", "Gluten-Free"]
  },
  {
    id: 17,
    title: "French Toast",
     ingredients: [
    { item: "Bread", quantity: "4", unit: "slices" },
    { item: "Eggs", quantity: "2", unit: "" },
    { item: "Milk", quantity: "100", unit: "ml" },
    { item: "Cinnamon", quantity: "1", unit: "tsp" },
    { item: "Sugar", quantity: "1", unit: "tbsp" }
  ],
    preparation: [
      "Whisk eggs, milk, cinnamon, and sugar.",
      "Dip bread slices.",
      "Fry until golden.",
      "Serve with syrup."
    ],
    author: "Claire Dubois",
    cuisine: "French",
    story: "A sweet start to lazy mornings.",
    url: "https://cdn.pixabay.com/photo/2015/10/19/06/13/french-toast-995532_1280.jpg",
    filters: ["Dessert", "Quick"]
  },
  {
    id: 18,
    title: "Miso Soup",
    ingredients: [
    { item: "Miso Paste", quantity: "2", unit: "tbsp" },
    { item: "Tofu", quantity: "200", unit: "g", notes: "cubed" },
    { item: "Seaweed", quantity: "1", unit: "sheet" },
    { item: "Green Onion", quantity: "2", unit: "", notes: "chopped" }
    ],
    preparation: [
      "Heat water and dissolve miso paste.",
      "Add tofu and seaweed.",
      "Simmer briefly.",
      "Garnish with green onion.",
      "Serve hot."
    ],
    author: "Haruto Sato",
    cuisine: "Japanese",
    story: "A comforting bowl served with rice.",
    url: "https://cdn.pixabay.com/photo/2017/08/26/19/19/ramen-2684000_1280.jpg",
    filters: ["Appetizer", "Vegan", "Quick"]

  },
  {
    id: 19,
    title: "Burrito",
    ingredients: [
    { item: "Tortilla", quantity: "1", unit: "large" },
    { item: "Rice", quantity: "100", unit: "g", notes: "cooked" },
    { item: "Beans", quantity: "100", unit: "g" },
    { item: "Chicken", quantity: "150", unit: "g", notes: "grilled" },
    { item: "Cheese", quantity: "50", unit: "g", notes: "shredded" }
    ],
    preparation: [
      "Warm tortilla.",
      "Add rice, beans, meat, and cheese.",
      "Fold sides and roll tightly.",
      "Serve wrapped."
    ],
    author: "Carlos Ramirez",
    cuisine: "Mexican",
    story: "",
    url: "",
    filters: ["Main Dish", "Quick"]

    
  },

];

//Menu with filters- Hamburguer menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
if (mainnav && hambutton) {
  hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
  });
}

//Formatter function to display the ingredients object
function formatIngredient(ing) {
  // Case 1: old recipes still using strings
  if (typeof ing === "string") return ing;

  // Case 2: new object structure
  const parts = [];

  if (ing.quantity && ing.quantity.toString().trim() !== "") {
    parts.push(ing.quantity);
  }

  if (ing.unit && ing.unit.trim() !== "") {
    parts.push(ing.unit);
  }

  if (ing.item && ing.item.trim() !== "") {
    parts.push(ing.item);
  }

  let line = parts.join(" ");

  if (ing.notes && ing.notes.trim() !== "") {
    line += ` (${ing.notes})`;
  }

  return line;
}




// Function to render recipes
function displayRecipes(filteredRecipes, containerId = "recipe-cards") {
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = "";

  // foreach to create HTML elements
  filteredRecipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    // Title
    const nameElement = document.createElement("h2");
    nameElement.textContent = recipe.title;
    nameElement.classList.add("recipe-title");
    card.appendChild(nameElement);

    // Author (only if filled)
    if (recipe.author && recipe.author.trim() !== "") {
      const author = document.createElement("p");
      author.textContent = `By ${recipe.author}`;
      author.classList.add("recipe-author");
      card.appendChild(author);
    }

    // Cuisine (only if filled)
    if (recipe.cuisine && recipe.cuisine.trim() !== "") {
      const cuisine = document.createElement("p");
      cuisine.textContent = `Cuisine: ${recipe.cuisine}`;
      cuisine.classList.add("recipe-cuisine");
      card.appendChild(cuisine);
    }

    // Story (only if filled)
    if (recipe.story && recipe.story.trim() !== "") {
      const storyElement = document.createElement("p");
      storyElement.textContent = recipe.story;
      storyElement.classList.add("recipe-story");
      card.appendChild(storyElement);
    }

    // === Recipe Steps Wrapper ===
    const stepsDiv = document.createElement("div");
    stepsDiv.classList.add("recipe-steps");

    // Ingredients Section
    const ingredientsHeading = document.createElement("h3");
    ingredientsHeading.textContent = "Ingredients";
    stepsDiv.appendChild(ingredientsHeading);

    const ingredientsList = document.createElement("ul");
    ingredientsList.classList.add("recipe-ingredients");

    recipe.ingredients.forEach((ing) => {
      const li = document.createElement("li");
      li.textContent = formatIngredient(ing);
      ingredientsList.appendChild(li);
    });
    stepsDiv.appendChild(ingredientsList);

    // Preparation Section
    const preparationHeading = document.createElement("h3");
    preparationHeading.textContent = "Preparation";
    stepsDiv.appendChild(preparationHeading);

    const preparationList = document.createElement("ol");
    preparationList.classList.add("recipe-preparation");
    recipe.preparation.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      preparationList.appendChild(li);
    });
    stepsDiv.appendChild(preparationList);

    // Filters Section
    const filtersDiv = document.createElement("div");
    filtersDiv.classList.add("recipe-filters");
    recipe.filters.forEach((filter) => {
      const span = document.createElement("span");
      span.classList.add("filter");
      span.textContent = filter;
      filtersDiv.appendChild(span);
    });
    stepsDiv.appendChild(filtersDiv);

    // Append stepsDiv to card
    card.appendChild(stepsDiv);

    // Image (at the end of the card)
    if (recipe.url && recipe.url.trim() !== "") {
      const imageElement = document.createElement("img");
      imageElement.src = recipe.url;
      imageElement.alt = recipe.title;
      imageElement.loading = "lazy";
      card.appendChild(imageElement);
    } else {
      const noImageText = document.createElement("p");
      noImageText.textContent = "No picture was uploaded for this recipe";
      noImageText.classList.add("no-image");
      card.appendChild(noImageText);
    }

    // Finally append card to container
    container.appendChild(card);
  });
}

displayRecipes(recipes);


//only some cards will be shown when the page loads

function getRandomRecipes(recipes, count = 10) {
  // Shuffle array
  const shuffled = [...recipes].sort(() => 0.5 - Math.random());
  // Return first `count` items
  return shuffled.slice(0, count);
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  const recipeCardsContainer = document.getElementById("recipe-cards");
  if (recipeCardsContainer) {
    // Load any saved recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Merge hard-coded recipes with saved ones
    const allRecipes = [...recipes, ...savedRecipes];

    // Show 10 random recipes from the combined list
    const randomRecipes = getRandomRecipes(allRecipes, 10);
    displayRecipes(randomRecipes);
  }

  // Review page logic stays the same...
});


//Filters from checkboxes
document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = link.textContent.trim();

    // Load saved recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Merge built-in + saved
    const allRecipes = [...recipes, ...savedRecipes];

    // Filter against the merged list
    const filtered = allRecipes.filter(recipe =>
      recipe.filters.includes(filter)
    );

    displayRecipes(filtered);
  });
});


//clear filter
const clearBtn = document.getElementById("clear");
if (clearBtn) {
  clearBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const allRecipes = [...recipes, ...savedRecipes];

    displayRecipes(getRandomRecipes(allRecipes, 10));

    document.querySelectorAll('.navigation a.active').forEach(link => {
      link.classList.remove('active');
    });
  });
}


//cuisine filter (add it to the menu). 
  //I decided against it since it is more code heavy and not really necessary for this assignment
  //I think the filters so far are ok
  
//Review page - render recipe

// === Review Page Logic ===
document.addEventListener("DOMContentLoaded", () => {
  const preview = document.getElementById("recipe-preview");
  const publishBtn = document.getElementById("publish");
  const correctBtn = document.getElementById("correct");

  if (preview) {
    const recipeData = localStorage.getItem("pendingRecipe");
    if (recipeData) {
      const recipe = JSON.parse(recipeData);
      // Reuse displayRecipes but target #recipe-preview
      displayRecipes([recipe], "recipe-preview");
    }

    if (publishBtn) {
      publishBtn.addEventListener("click", () => {
        const recipe = JSON.parse(localStorage.getItem("pendingRecipe"));
        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push(recipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        localStorage.removeItem("pendingRecipe");
        window.location.href = "recipes.html";
      });
    }

    if (correctBtn) {
      correctBtn.addEventListener("click", () => {
        window.location.href = "form.html";
      });
    }
  }
});


