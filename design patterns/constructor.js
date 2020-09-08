// constructors are used with objects so we can make many types of the same object (people in a class, types of cars in a sale, types of food in a bakery)

function BakedGood(name, type, count, price){
    this.itemName = name,
    this.itemType = type,
    this.itemCount = count,
    this.itemPrice = price
}

let bearClaw = new BakedGood("bear claw", "pastry",10,5.00);
let chocoChip = new BakedGood("Chocolate Chip Cookie","cookie",25,2.50);

console.log(itemName);
console.log(bearClaw);
console.log(chocoChip.itemName);
