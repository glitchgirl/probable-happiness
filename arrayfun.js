//splice
var example = ['A', 'B', 'C', 'D'];

example.splice(2, 0, 'E');       // remove 0 item, and insert 'E' at 2-index 

console.log(example);
// ["A", "B", "E", "C", "D"]
var copy = example.splice(2, 1); // remove 1 item at 2-index postion, return the deleted item

console.log(copy);
// ["E"]
console.log(example);
// ["A", "B", "C", "D"]
var copy2 = example.splice(2, 0, 'E');

console.log(copy2);
// []
console.log(example);

//slice

var arr = ['A', 'B', 'C', 'D'];

var a = arr.slice();        // begin is undefined, slice begins from index 0 to the length of array.

console.log(a);
// ["A", "B", "C", "D"]
var b = arr.slice(-1);      // begin is negative 1, slice begins from the last one element to the length of array. 

console.log(b);
// ["D"]
var c = arr.slice(0, -1);   // begin is zero, slice begins from index 0 to the first-to-last element. 

console.log(c)
// ["A", "B", "C"]

//split
var string = 'Hello World. How are you doing?';

var splits = string.split(' ', 3);    // split() looks for spaces in a string and returns the first 3 splits that it finds. 

console.log(splits)
// ["Hello", "World.", "How"]
var splits = string.split(' ')

console.log(splits)
// ["Hello", "World.", "How", "are", "you", "doing?"]