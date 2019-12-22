'use strict'; // no silly mistakes allowed

// ** //
// // // class = an extensible program-code-template for creating objects, providing initial values for state
// (member variables), and implementations of behavior (member functions or methods). // // //
// ** //

class Person {
    constructor (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname; // methods & objects inside the constructor works like function constructors
    }
    greet() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    } // methods added to this class are automatically put on the prototype
}

var john = new Person('John', 'Dough');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
