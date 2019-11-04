// // PROTOTYPE
// //  In a prototype, it is created in the same syntax as a variable. Always followed by function that takes arguments. 
// // These arguments correlate to the data that will be entered in order when the prototype is being called. 
// let PersonP = function(name, age) {
//     this.personName = name; 
//     this.personAge = age;
// };  
// // This is how a function, that is part of a specific prototype is created. Using syntax protName.prototype.funcName = function(){}
// PersonP.prototype.about = function() {
//     return `${this.personName} is ${this.personAge} years old`
// }; 

// let EmployeeP = function(name, age, id) {
// // This line below is the equivalent to super. We use protName.call() - Within the parentheses, we specify which arguments we want passing 
// // In to the next function
//     PersonP.call(this, name, age);
//     this.employeeId = id;
// }; 
// // To specify a new prototype that is a child of a certain prototype we use protName.prototype = object.create(parentProt.prototype)
// EmployeeP.prototype=Object.create(PersonP.prototype);

// let jim = new EmployeeP("Jim Morrison", 76, 879901); 
// console.log(`${jim.personName} employee ID is ${jim.employeeId}`);
// console.log(jim.about());

// // CLASS
// class PersonC {
//     constructor(name, age){
//         this.personName = name; 
//         this.personAge = age; 
//     }
//     about() {
//         return console.log(`${this.personName} is ${this.personAge}`)
//     }
// }; 

// class Employee extends PersonC {
//     constructor(name, age, id){
// // SUPER - we are stating the 
//         super(name, age)
//         this.employeeId = id; 
//     };
// };

let AnimalP = function(name){ 
    this.animalName = name; 
    this._hunger = 100; 
    this._thirst = 100;
}; 

AnimalP.prototype.name = function(){ 
    return console.log(`Your pet name is ${this.animalName}`);
}; 

AnimalP.prototype.hunger = function(){
    return console.log(`Your pet's current hunger ${this._hunger}`);
}; 

AnimalP.prototype.thirst = function(){
    return console.log(`Your pet's current thirst is ${this._thirst}`);
};  

// Food item will be assigned a numerical value
// Value is passed into the function to make the loop run as many times as the number
AnimalP.prototype.eat = function(num) {
        this._hunger = this._hunger - num;
    return console.log(this._hunger);
}; 

AnimalP.prototype.drink = function(num) {
        this._thirst = this._thirst - num;
    return console.log(this._thirst);
}; 

let BunnyP = function(name, lovesCarrot, favFood) {
    AnimalP.call(this,name)
    this._lovesCarrot = lovesCarrot; 
    this.animalFavFood = favFood;
}; 
BunnyP.prototype=Object.create(AnimalP.prototype); 

BunnyP.prototype.lovesCarrots = function() {
    return console.log(`${this._lovesCarrot}`)
}; 

BunnyP.prototype.favFood = function() {
    return console.log(`${this.animalFavFood}`)
};

let rosie = new BunnyP("Rosie", true, ["basil", "rocket", "broccoli"]); 

rosie.eat(20);
rosie.eat(10);
