//creates a new array based on a condition you pass it

const array = ["apples", "bananas","apricots","pears"];

function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }
//this function takes an array, and a string and returns an array with only strings that contain that string.
console.log(filterItems(array, "ap"));