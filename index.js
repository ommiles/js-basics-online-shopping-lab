/* Objectives
(1)Model a shopping cart full of items as an array of objects in JavaScript.
(2)Iterate over arrays with for loops
(3)Use ES6 ${template literals} instead of "regular, " + "old " + string + " concatenation."
(4)Brush up on conditionals and control flow to make some Oxford comma magic happen.
 */


// below is a a cart variable that points at an empty array
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// The addToCart() function accepts one argument, the name of an item.  The cart item is structured as an object with a key of itemName and the corresponding value of price (from the variable declared / defined above)

function addToCart(item) {
  // The price of each item should be a randomly-generated integer between 1 and 100.
  var price = (Math.floor(Math.random() * 100) + 1);
  let obj = {
    itemName: `${item}`,
    itemPrice: price
  };
  // As more items are added, the cart should start to look something like this: [ { itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }].
  cart.push(obj);
  // Upon the successful addition of a new item to the cart, the function should return <itemName> has been added to your cart. .
  return (`${obj.itemName} has been added to your cart.`);
}

/* The viewCart() function does not accept any arguments. It should loop over every item in your cart, returning the contents as one long, coherent statement in this format: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49. */
function viewCart() {
  if(cart.length == 0) {
    // If the cart is empty, the function should instead return:
    var intercom = "Your shopping cart is empty."
    return intercom;
  } // If the cart contains items, the function should return:
    else {
    var intercom = `In your cart, you have `;
    var i = 0;
    if(cart.length>1) {
    for (i=0;i<cart.length-1;i++) {
    intercom += `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  intercom += `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
} else {intercom += `${cart[0].itemName} at $${cart[0].itemPrice}.`
}
return intercom;
}
}

// The total() function accepts no arguments, iterates through the cart array, and returns the current total value of the items in the cart.
function total() {
  var i=0;
  var total = 0;
  for(i=0;i<cart.length;i++) {
    total += cart[i].itemPrice
  }
  return total;
}

// The removeFromCart() function accepts one argument, the name of the item that should be removed.
function removeFromCart(item) {
  var intercom = "Announcement";
  // If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
  for (var i=0;i<cart.length;i++) {
    // Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find Array.prototype.splice() to be useful.
    if (cart[i].itemName == item) {
      cart.splice(i,1);
      return cart;
      }
    }
    // If the cart does not contain a matching item, the function should return That item is not in your cart.
    intercom = "That item is not in your cart."
    return intercom;
  }

// The placeOrder() function accepts one argument, a credit card number.
function placeOrder(cardNumber) {
  // If no argument is received, the function should print out Sorry, we don't have a credit card on file for you..
  if(cardNumber == null) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    /* If a card number is received, the function should
    empty the cart array and return Your total cost is $71, which will be charged to the card 83296759. (where 71 is the value returned by total() and 83296759 is the credit card number passed to placeOrder()) */
    var intercom = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    setCart([]);
    return intercom;
  }
}