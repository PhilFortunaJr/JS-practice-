alert("Let's make a pizza.");

var customerName = prompt("What is your name?", "John Doe");


var pieCount = prompt("How many pizzas will you be ordering? Enter integer e.g. (1, 3, etc.)", "2");
pieCount = parseInt(pieCount, 10); 
var serviceFee = 0;
if (pieCount >= 1 && pieCount < 3) {
  serviceFee = pieCount * 3; 
} else if (pieCount < 5) {
 serviceFee = pieCount * 2; 
} else { 
  serviceFee = 0; 
}

 console.log(customerName + ", you are ordering " + pieCount + " pizzas.");
 console.log("The current service fee is: $" + serviceFee + ".00");

var pizzaSize = prompt("Enter the size of the pizza: S, M, or L", "S").toLowerCase();
var perPizzaPrice;
var subTotalPrice = 0;

if (pizzaSize === "s") {
  perPizzaPrice = 8; 
} else if (pizzaSize === "m") {
  perPizzaPrice = 12; 
} else {
  perPizzaPrice = 16; 
}

subTotalPrice = (pieCount * perPizzaPrice) + serviceFee;

console.log(customerName + ", the subtotal of your order is: $" + subTotalPrice + ".00");

alert("Okay! " + customerName + ", let's create your pizza.");

var ingredients = ['pepper', 'olive', 'mushroom', 'onion', 'pineapple', 'pepperoni', 'bacon', 'sausage', 'ham', 'anchovy'];
var ingredientsText = "Enter a topping: "; 
for (var i = 0; i < ingredients.length; i++) {
    ingredientsText += ingredients[i];
    if (i !== ingredients.length - 1) {
        ingredientsText += ", ";
    } else {
        ingredientsText += ".";
    }
}


console.log(ingredientsText);
var orderIngredients = [];
var pizzaToppingsStatus = "";
var creatingPizza = true;
while(creatingPizza) {
    var toppingToAdd = prompt(ingredientsText, "Pepperoni");
    orderIngredients.push(toppingToAdd);

    var addAnother = prompt("Add another topping? Enter (Y)es or (N)o.", "N").toLowerCase();
    if (addAnother === "y" || addAnother === "yes") {
        creatingPizza = true;
    } else {
        creatingPizza = false;
    }
}

for (var k = 0; k < orderIngredients.length; k++) {

    if (orderIngredients.length === 1) {
        pizzaToppingsStatus += orderIngredients[0];

    } else if (orderIngredients.length === 2) {
        pizzaToppingsStatus += orderIngredients[k];

        if (k === 0) {
            pizzaToppingsStatus += " and ";
        }

    } else {
        pizzaToppingsStatus += orderIngredients[k];

        if (k < orderIngredients.length - 2) {
            pizzaToppingsStatus += ", ";
        } else if (k < orderIngredients.length - 1) {
            pizzaToppingsStatus += ", and ";
        }
    }
}


console.log("Your " + pizzaToppingsStatus + " pizza looks delicious.");
var size = "";
var totalPrice = 0; var taxRate = 0.05; var basePizzaPrice = 0; var extraToppingsFee = 0; var salesTax = 0;

if (pizzaSize === "s") {
    size = "small";
} else if (pizzaSize === "m") {
    size = "medium";
} else {
    size = "large";
}


if (orderIngredients.length > 1) {

    for (var m = 1; m < orderIngredients.length; m++) {

        var xtraCharge;
        switch (orderIngredients[m]) {
            case 'pepper': xtraCharge = 1.00; break;
            case 'olive': xtraCharge = 1.00; break;
            case 'mushroom': xtraCharge = 1.00; break;
            case 'onion': xtraCharge = 1.00; break;
            case 'pineapple': xtraCharge = 1.00; break;
            default: xtraCharge = 1.50;
        }
        extraToppingsFee += xtraCharge;
    }
}


extraToppingsFee = extraToppingsFee * pieCount;
basePizzaPrice = pieCount * perPizzaPrice;
salesTax = (basePizzaPrice + serviceFee + extraToppingsFee) * taxRate;
totalPrice = basePizzaPrice + serviceFee + extraToppingsFee + salesTax;

console.log(customerName + ", you ordered " + pieCount + " " + size + ", " + pizzaToppingsStatus + " pizza(s)."); 
console.log("Base Price: $" + basePizzaPrice.toFixed(2)); 
console.log("Service fee: $" + serviceFee.toFixed(2)); 
console.log("Extra toppings fee: $" + extraToppingsFee.toFixed(2)); 
console.log("Sales tax 5%: $" + salesTax.toFixed(2)); 
console.log("----------------------------"); 
console.log("TOTAL: $" + totalPrice.toFixed(2));
