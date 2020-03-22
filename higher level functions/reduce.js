// takes an array and a function and produces one result. this is really useful for stat (avg/mean/median)

const array = [100,70,89,67,96]

const avg = array.reduce((a,b) => a + b, 0) / array.length;
//this one takes more thought than mapping. so first, this reduces the array into a sum (a + b), then divides by the length. 

console.log(`${array} ${avg}`);