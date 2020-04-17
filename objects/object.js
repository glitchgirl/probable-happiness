// object
// key value pairs - how we store info in an object
// properties-data and methods-function that belongs to the object
// variable
//has its own scope
//scope - determines what code can see what variables
//local-only a function can see it, unless we return it and global-everything can see it 

var car ={
    type:"honda",
    model:"cr-v",
    year: "2007",

    drive: function(){
        //broom brrom
    },
    park: function(){
        //no more broom broom
        console.log("car is parked");
    },
    fillUp: function(){

    }
};
//accessing stuff - use dot notation

console.log(car.type);
car.park();

//this is a keyword that binds to the scope of the object it belongs too, if it is globally scope on a web browser, it is scoped to the DOM. In node it scopes to the environment 

// this - object constructor
function Shoes(size,color,price,brand){
    this.size = size,
    this.color = color,
    this.price = price,
    this.brand = brand,
    this.listItem = function(){ return this.price + " " + this.brand };
}

var boots = new Shoes(6,"blue",100,"converse");
var item = boots.listItem();
console.log(item); 

var sandals = new Shoes(9,"tan",25,"virabrims");
var itemTwo = sandals.listItem();
console.log(itemTwo);

// this can be more strictly bound to an object with functions like, call, bind, apply
