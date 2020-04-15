//make an empty array
var array = [];

// this is a no
var colors = new Array();

//make an array with stuff in it 
var dogs = ["fluffy", "bow tie", "bruno"]; 

//arrays can contain any type of data, like strings, booleans, numbers, other arrays or objects

//how to add stuff

//push - end
dogs.push("becca");

//unshift - beginning
dogs.unshift("rex");

//but how to add in the middle? 
// splice - has 3 params index, delete count, item being inserted
// if we want to add and not delete, our delete count needs to be zero
dogs.splice(2,0,"roman"); 

console.log(dogs);

// how to remove stuff

var fish = ["gold","bass","clown","jelly","salmon"];

//pop - end
fish.pop();

//shift - beginning
fish.shift();

//splice - middle

fish.splice(1,1);

//using splice to replace instead of add or remove

fish.splice(1,1,"beta"); 

console.log(fish);

//what is split
//an string method, that takes 1 param normally a character, and breaks apart the string on that character and makes into an array
// if char isn't found, just pushes whole string into array
//split result needs to be stored in a variable otherwise its not really useful

var name = "morgan chase smith";
var nameArr = name.split(" ");
console.log(name); 

// how to get an array back to a string
//toString adds a comma which may be problematic
stNameArr = nameArr.toString();
console.log(stNameArr);

//join - no commas
var newName = nameArr.join(" ");
console.log(newName);

//what about slicing
//this is the one that makes a copy, and will produce an new array based on the range of the parameters
// takes two params, begining and end (end is not inclusive i.e. if you put 10 it will only go to 9)

var numbers = [12,60,88,100,33];

var end = numbers.slice(2,numbers.length); 
console.log(numbers , end);

