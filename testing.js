var goOutside;
var weather = "bad";

if(weather === "nice"){
    goOutside = true;
} else if (weather === "okay") {
    goOutside = true;
} else {
    goOutside = false;
}

if (goOutside) {
    console.log("we are going outside");
} else {
    console.log("stay inside");
}



// getting to the bar

var age;
var haveId;
var haveDriver;
var isSad = false;

age = 2020 - 1995; 
haveId = true; 
if(!isSad){
    haveDriver = true;
} else {
    haveDriver = false; 
}

if(age >= 21){
    // keep going
    if(haveId){
        if(haveDriver){
            console.log("yay go to bar");
        } else {
            console.log("make friends");
        }
    } else {
        console.log("go get an id")
    }
} else {
    console.log("too young, so sad");
}

if( age > 21 && haveId && haveDriver){
    console.log("go");
} else {
    console.log("no");
}

// video games
var likeGames = true;
var haveFriends = false;
var irl = true;

if(!likeGames){
    if(haveFriends){
        if(irl){
            console.log("wii");
        } else {
            console.log("xbox");
        }
    } else {
        console.log("playstation");
    }
} else {
    console.log("buy a pc");
}

// going to lunch
var haveMoney;
var fastFood;
var homeMade;
var type;
var restaurant;

haveMoney = true;
fastFood = false;
homeMade = "no";
type = "burger";
restaurant = "deli";

if(haveMoney){
if(fastFood){
    if(type === "burger"){
        console.log("5guys");
    } else if(type === "wings"){
        console.log("ATown");
    
    } else if(type === "salad"){
        console.log("TopDog");
    }
}

} else if (homeMade === "yes"){
    console.log("goHome");
} else if (homeMade === "don't like it"){
    console.log("ask a friend");
} else {
    console.log("starve");
}
