//how to do double split an array. given a string that has input like "quizname%90, quizname2%86" lets get it down to an array of arrays so we can compare to an object 

//first lets create an example string
const grade = "htmlquiz%90, designquiz%80";

//then lets go ahead and split this on the comma

const quizArr = grade.split(",");
//notice that split makes the string into an array. this means that we cant just use split again because spilt is a string method. so we gotta get creative.

//we can use any kind of for/while loop here, i just did a for loop
for(i =0; i < quizArr.length; i++){
    quizArr[i] = quizArr[i].split("%");
}
//now we have an array of arrays, which we can access and compare each part to either the key or the value of our object. You can also do the trim inside the for loop, if you don't want spaces. 
