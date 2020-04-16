//loops

//while loop
// while a condition a condition is in a current state

// infinite loops - normally happen because the condition doesn't change
// while(true){
//     console.log("this is bad");
// }

// conditon
var isRaining=true;
while(isRaining){
    console.log("windshield wipers");
    checkWeather();
}

function checkWeather(){
    isRaining = false;
    return isRaining;
}
// counter
var counter = 5;
while(counter >= 0){
    grade();
    counter --; 
}

function grade(){
    console.log("test graded");
}

//do while loop
// pretty much the same thing, but they will ALWAYS run at least once
var inventory = 0;
do{
    console.log(inventory);
}while(inventory > 0);

//for loops
// made up of four pieces, init. var, condition we want to check, incerment, the code we want want to run
var plants = ["marigolds","apple trees", "squash"];

for( var i = 0; i < plants.length; i++){
    console.log(plants[i]);
}

//for each - arrays
// array.forEach(callback function) - applies a function to each element in the array
// typically use fat arrow notation, but we don't have to

//non-arrow function 
var books = ["call of the wild","the lord of the rings","kite runner"];

books.forEach(function(book){
    console.log(book);
})

//arrow function
var booksTwo = ["emma","the great gatsby", "wrinkle in time"];

booksTwo.forEach(bookT => console.log(bookT)); 
//for in - objects
// properties of an object
var mailbox ={
    color: "blue",
    number: 110,
    status: "outgoing mail",
    material: "metal"
}
// only does keys in object
for(var stat in mailbox){
    console.log(stat);
}
// what if i want to see the values
for(var stat in mailbox){
    console.log(mailbox[stat]);
}
// in order to see the values of our object, we use bracket notation. If we use dot notation it thinks the variable name is a key value pair (property) of the element and it won't work.
//for of - iterable objects
var shampoo = ["water","scent","suds"];
    
for(var ing of shampoo){
    console.log(ing);
}

//iife that looks at all of the arguments it gets, but doesn't have them hard coded. 
(function() {
    for (const argument of arguments) {
        console.log(argument);
    }
})(1, 2, 3);