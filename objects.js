/*
JavaScript Object Reference
JavaScript Objects
Objects are one of JavaScript's data types.

Objects are used to store key/value (name/value) collections.

A JavaScript object is a collection of named values.

The following example creates a JavaScript object with four key/value properties:

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
For a tutorial about objects, read our JavaScript Object Tutorial.

JavaScript Object Methods and Properties
Name	Description
constructor	Returns the function that created an object's prototype
keys()	Returns an Array Iterator object with the keys of an object
prototype	Let you to add properties and methods to JavaScript objects
toString()	Converts an object to a string and returns the result
valueOf()	Returns the primitive value of an object

Accessing Object Properties
You can access object properties in two ways:

objectName.propertyName
or

objectName["propertyName"]

What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function declaration, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.

Do Not Declare Strings, Numbers, and Booleans as Objects!

*/