/*
make an array of 10 grocery store items 
loop through that array and log each item.
loop through a string at least 10 characters long and log each character
make that string upper case
 */

var groceryItems = [
  'bread',
  'milk',
  'cheese',
  'gatorade',
  'paper towels',
  'coffee',
  'wine',
  'yogurt',
  'cookies',
  'eggs'
];
var name = 'Morgan Chase Smith';

function listGroceries(grocArray) {
  for (var i = 0; i < grocArray.length; i++) {
    console.log(grocArray[i]);
  }
}

/* add below includes method*/

var groceryList = groceryItems.find(a => a.includes('y'));

console.log(groceryList);

listGroceries(groceryItems);
listGroceries(name);

name = name.toUpperCase();
listGroceries(name);
