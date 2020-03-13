//Object– An Object is a unique entity which contains property and methods. 
//For example “car” is a real life Object, which have some characteristics like color, type, model, horsepower and performs certain action like drive. 
//The characteristics of an Object are called as Property, in Object Oriented Programming and the actions are called methods. 
//An Object is an instance of a class. 
//Objects are everywhere in JavaScript almost every element is an Object whether it is a function,arrays and string.

//Defining object 
let person1 = {
    first_name: 'P',
    last_name: 'S',

    //method 
    getFunction: function () {
        return (`The name of the person is  
          ${person.first_name} ${person1.last_name}`)
    },
    //object within object 
    phone_number: {
        mobile: '6789',
        landline: '101112'
    }
}
console.log(person1.getFunction());
console.log(person1.phone_number.landline);

//using a constructor 
function person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}
//creating new instances of person object 
let person0 = new person('pau', 's');
let person2 = new person('her', 's');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

const coder = {
    isStudying: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I  
          studying?: ${this.isStudying}.`)
    }
}
// Object.create() method 
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder" 
me.name = 'Paula';

// Inherited properties can be overwritten 
me.isStudying = 'True';

me.printIntroduction();


// Defining class using es6 
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return (`The name of the bike is ${this.name}.`)
    }
}
// Making object with the help of the constructor 
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name);    // Hayabusa 
console.log(bike2.maker);   // Kawasaki 
console.log(bike1.getDetails());

//Encapsulation – The process of wrapping property and function within a single unit is known as encapsulation.


//encapsulation example 
class person5 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    add_Address(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`Name is ${this.name},Address is: ${this.add}`);
    }
}

let person4 = new person5('pp', 80);
person4.add_Address('Dallas');
person4.getDetails(); 

//Inheritance
//Inheritance is also known as "sub-classing". It is a construct available in JavaScript through the "extends" keyword. Inheritance is not available in all object-oriented programming languages, but most OOP languages do include it.

class Human {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log(this.name + ' moves.');
    }
}

class Baby extends Human {
    constructor(name) {
        super(name);
    }

    move() {
        console.log(this.name + ' crawls.');
    }
}

const baby = new Baby('Daisy');
baby.move(); // Daisy crawls.