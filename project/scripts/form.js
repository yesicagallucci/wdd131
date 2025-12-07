
document.addEventListener("DOMContentLoaded", () => {
  const countryDropdown = document.getElementById("country-dropdown");

  if (countryDropdown) {
    const countries = [
      "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
      "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
      "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
      "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzaville)","Costa Rica",
      "Croatia","Cuba","Cyprus","Czechia","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador",
      "Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France",
      "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau",
      "Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq",
      "Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait",
      "Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
      "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico",
      "Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru",
      "Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman",
      "Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
      "Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe",
      "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia",
      "South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
      "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey",
      "Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
      "Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
    ];

    countries.forEach(country => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      countryDropdown.appendChild(option);
    });
  }

});


// form.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Collect filters from checkboxes
      const filters = [];
      document.querySelectorAll(".filters input[type=checkbox]").forEach(cb => {
        if (cb.checked) filters.push(cb.labels[0].innerText.trim());
      });

      // Build recipe object
      const recipe = {
        title: document.getElementById("title").value.trim(),
        author: document.getElementById("author").value.trim(),
        cuisine: document.getElementById("country-dropdown").value.trim(),
        story: document.getElementById("story").value.trim(),
        ingredients: document.getElementById("ingredients").value
          .split("\n").map(i => i.trim()).filter(i => i),
        preparation: document.getElementById("instructions").value
          .split("\n").map(s => s.trim()).filter(s => s),
        url: document.getElementById("recipe-url").value.trim(),
        filters
       
      };

      // Save to localStorage
      localStorage.setItem("pendingRecipe", JSON.stringify(recipe));

      // Redirect to review page
      window.location.href = "review.html";
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  //Step A: Pre-fill if pendingRecipe exists
  const recipeData = localStorage.getItem("pendingRecipe");
  if (recipeData && form) {
    const recipe = JSON.parse(recipeData);

    // Fill text inputs
    document.getElementById("title").value = recipe.title || "";
    document.getElementById("author").value = recipe.author || "";
    document.getElementById("country-dropdown").value = recipe.cuisine || "";
    document.getElementById("story").value = recipe.story || "";

    // Ingredients and instructions back into textareas (one per line)
    document.getElementById("ingredients").value = recipe.ingredients.join("\n");
    document.getElementById("instructions").value = recipe.preparation.join("\n");

    //img
    document.getElementById("recipe-url").value = recipe.url || "";

    // Filters: check the boxes that match
    document.querySelectorAll(".filters input[type=checkbox]").forEach(cb => {
      if (recipe.filters.includes(cb.labels[0].innerText.trim())) {
        cb.checked = true;
      }
    });
  }

  //Step B: Handle new submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Collect filters
      const filters = [];
      document.querySelectorAll(".filters input[type=checkbox]").forEach(cb => {
        if (cb.checked) filters.push(cb.labels[0].innerText.trim());
      });

      // Build recipe object
      const recipe = {
        title: document.getElementById("title").value.trim(),
        author: document.getElementById("author").value.trim(),
        cuisine: document.getElementById("country-dropdown").value.trim(),
        story: document.getElementById("story").value.trim(),
        ingredients: document.getElementById("ingredients").value.split("\n").map(i => i.trim()).filter(i => i),
        preparation: document.getElementById("instructions").value.split("\n").map(s => s.trim()).filter(s => s),
        url: document.getElementById("recipe-url").value.trim(), 
        filters
        
      };

      // Save to localStorage
      localStorage.setItem("pendingRecipe", JSON.stringify(recipe));

      // Redirect to review page
      window.location.href = "review.html";
    });
  }
});
