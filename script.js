// Select the button(s)
const addFoodButtons = document.querySelectorAll('button[name="addFood"]');

// Add an event listener to each button
addFoodButtons.forEach((button) => {
  button.addEventListener('click', () => {
    addFoodItem();
  });
});

// Define the function that creates and appends the HTML elements
function addFoodItem() {
  const template = `
    <select name="food" id="food">
      <option value="burger">Burger</option>
      <option value="kikiam">Kikiam</option>
      <option value="fishbol">Fishbol</option>
      <option value="fries">Fries</option>
    </select>
    <br><br>
    <label for="quantity">Quantity</label><br>
    <input type="number" id="quantity" name="quantity"><br>
    
  `;

  // Create a new div to hold the new food item
  const newFoodItem = document.createElement('div');
  newFoodItem.classList.add('food-item');
  newFoodItem.innerHTML = template;

  // Find the container where the new food item will be appended
  const foodItemsContainer = document.querySelector('#food-items-container');

  // Append the new food item to the container
  foodItemsContainer.appendChild(newFoodItem);
}

function pay() {
                const cash = document.getElementById("cash").value;
                const foodItems = document.querySelectorAll('[name="food"]');
                let total = 0;
                foodItems.forEach(foodItem => {
                  const foodValue = foodItem.value;
                  const quantityValue = foodItem.parentElement.querySelector('[name="quantity"]').value;
                  const quantity = parseInt(quantityValue);
                  if (foodValue === "burger") {
                    total += 60 * quantity;
                  } else if (foodValue === "kikiam") {
                    total += 12 * quantity;
                  }else if (foodValue === "fries") {
                        total += 50 * quantity;
                      }else if (foodValue === "fishbol") {
                        total += 20 * quantity;
                      }
                });
                const change = cash - total;
                alert(`Change: ${change}`);
              }

              function orderFinalized() {
                    const foodItems = document.querySelectorAll('[name="food"]');
                    let total = 0;
                    foodItems.forEach(foodItem => {
                      const foodValue = foodItem.value;
                      const quantityValue = foodItem.parentElement.querySelector('[name="quantity"]').value;
                      const quantity = parseInt(quantityValue);
                      if (foodValue === "burger") {
                        total += 60 * quantity;
                      } else if (foodValue === "kikiam") {
                        total += 25 * quantity;
                      }else if (foodValue === "fries") {
                        total += 50 * quantity;
                      }else if (foodValue === "fishbol") {
                        total += 20 * quantity;
                      }
                    });
                    alert(`Order Finalized: Total = ${total}`);
                  }
