//switch statements
// they are control statements that are built off of if/else statements, and are good when there are many conditions to check.
// this doesn't work well for ranges
// switch(expression- the thing we are checking){
//  case value
//  do some code
//  break;
// deafult case 
// }

//grade example - 100, 90 a, 80 b, 70 c, 60 d, else the just fail

var grade = 80;
switch(grade){
    case 100:
    case 90:
    grade = "a";
    break; 
    case 80:
    grade = "b";
    break;
    case 70:
    grade = "c";
    break;
    case 60:
    grade = "d";
    break;
    default:
    grade = "f";
}

console.log(grade);

// days of the week

// date object - returns day of the week, returns as a number want to change to the day of the week

switch(new Date().getDay()){
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    break;
    default:
    day = "no";
}

console.log(day);