// creates a new array from an old array and some type of math function like, add 2 or double all numbers

const array = [3,6,8,12,10];

const mappedArr = array.map(x => x * 2);
// so, x is a place holder, which will be replaced by each value in array. i.e, this could be writted with a for loop, but this also gives the benefit of not changing the orginial array.

console.log(array);
console.log(mappedArr);

//this is really useful for data transformations (projections)